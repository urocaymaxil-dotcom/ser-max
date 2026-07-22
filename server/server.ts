import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { initDb, getDb } from "./db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || "super-secret-mscs-candidate-portfolio-key-2026";

// Middlewares
app.use(cors({ origin: "*" })); // Allow frontend calls from anywhere
app.use(express.json());

// Resolve root directory of server package whether running via ts-node (__dirname === server) or node dist/server.js (__dirname === server/dist)
const baseDir = path.basename(__dirname) === "dist" ? path.resolve(__dirname, "..") : __dirname;
const uploadsDir = path.join(baseDir, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use("/uploads", express.static(uploadsDir, {
  acceptRanges: true,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".mp3")) {
      res.setHeader("Content-Type", "audio/mpeg");
    }
  }
}));

// Multer Config for uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit for audio/media files
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|mp3|wav|m4a|ogg|aac|flac/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = file.mimetype.startsWith("audio/") || file.mimetype.startsWith("image/") || file.mimetype === "application/pdf";
    if (extname || mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only audio files (mp3, wav, m4a, ogg), images, and PDFs are allowed!"));
    }
  },
});

// Strict Cryptographic JWT Authentication Middleware
function authenticateToken(req: any, res: any, next: any) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. Authentication token required." });
  }

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token. Access denied." });
    }
    req.user = user;
    next();
  });
}

// Routes

// 1. Auth routes
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  try {
    const db = getDb();
    const admin = await db.get("SELECT * FROM admin WHERE username = ?", [username]);

    if (!admin) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const isValid = await bcrypt.compare(password, admin.password_hash);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const token = jwt.sign({ id: admin.id, username: admin.username }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, username: admin.username });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/auth/verify", authenticateToken, (req, res) => {
  res.json({ valid: true, user: (req as any).user });
});

app.post("/api/auth/change-password", authenticateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) {
    return res.status(400).json({ error: "Current password and new password are required." });
  }

  if (newPassword.length < 8) {
    return res.status(400).json({ error: "New password must be at least 8 characters long." });
  }

  try {
    const db = getDb();
    const adminId = (req as any).user?.id || 1;
    const admin = await db.get("SELECT * FROM admin WHERE id = ?", [adminId]);

    if (!admin) {
      return res.status(404).json({ error: "Admin user not found." });
    }

    const isValid = await bcrypt.compare(currentPassword, admin.password_hash);
    if (!isValid) {
      return res.status(401).json({ error: "Incorrect current password." });
    }

    // High cost bcrypt salt 12 for strong protection against brute force attacks
    const newHashedPassword = await bcrypt.hash(newPassword, 12);
    await db.run("UPDATE admin SET password_hash = ? WHERE id = ?", [newHashedPassword, adminId]);

    res.json({ success: true, message: "Password updated successfully with 12-round bcrypt hash." });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Contact routes
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    const db = getDb();
    const createdAt = new Date().toISOString();
    await db.run(
      "INSERT INTO messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, ?)",
      [name, email, subject || "No Subject", message, createdAt]
    );
    res.status(201).json({ success: true, message: "Message submitted successfully." });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/contact", authenticateToken, async (req, res) => {
  try {
    const db = getDb();
    const messages = await db.all("SELECT * FROM messages ORDER BY id DESC");
    res.json(messages);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.patch("/api/contact/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { is_read } = req.body;

  try {
    const db = getDb();
    await db.run("UPDATE messages SET is_read = ? WHERE id = ?", [is_read ? 1 : 0, id]);
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/contact/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const db = getDb();
    await db.run("DELETE FROM messages WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Certificates routes
app.get("/api/certificates", async (req, res) => {
  try {
    const db = getDb();
    const certificates = await db.all("SELECT * FROM certificates");
    res.json(certificates);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/certificates/:id/upload", authenticateToken, upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const imageUrl = `/uploads/${req.file.filename}`;
  const updatedAt = new Date().toISOString();

  try {
    const db = getDb();
    // Check if certificate exists, then insert or replace
    await db.run(
      "INSERT OR REPLACE INTO certificates (id, title, image_url, updated_at) VALUES (?, ?, ?, ?)",
      [id, title || "", imageUrl, updatedAt]
    );

    res.json({ success: true, imageUrl });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Gallery routes
app.get("/api/gallery", async (req, res) => {
  try {
    const db = getDb();
    const galleryItems = await db.all("SELECT * FROM gallery ORDER BY id DESC");
    res.json(galleryItems);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/gallery/upload", authenticateToken, upload.single("image"), async (req, res) => {
  const { title, category, event_date } = req.body;
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const imageUrl = `/uploads/${req.file.filename}`;
  const createdAt = new Date().toISOString();

  try {
    const db = getDb();
    await db.run(
      "INSERT INTO gallery (title, category, event_date, image_url, created_at) VALUES (?, ?, ?, ?, ?)",
      [title || "Memorable Event", category || "Memories", event_date || "", imageUrl, createdAt]
    );
    res.status(201).json({ success: true, imageUrl });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/gallery/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const db = getDb();
    // Find image to delete file from disk
    const item = await db.get("SELECT image_url FROM gallery WHERE id = ?", [id]);
    if (item && item.image_url) {
      const filename = path.basename(item.image_url);
      const filePath = path.join(uploadsDir, filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await db.run("DELETE FROM gallery WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Songs & Motivational Music routes
app.get("/api/songs", async (req, res) => {
  try {
    const db = getDb();
    const songs = await db.all("SELECT * FROM songs ORDER BY id DESC");
    res.json(songs);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/songs/:id/play", async (req, res) => {
  const { id } = req.params;
  try {
    const db = getDb();
    await db.run("UPDATE songs SET plays_count = COALESCE(plays_count, 0) + 1 WHERE id = ?", [id]);
    const updated = await db.get("SELECT plays_count FROM songs WHERE id = ?", [id]);
    res.json({ success: true, plays_count: updated?.plays_count || 1 });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/songs/upload", authenticateToken, upload.single("audio"), async (req, res) => {
  const { title, description, lyrics } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Song title is required." });
  }

  const audioUrl = req.file ? `/uploads/${req.file.filename}` : "";
  const createdAt = new Date().toISOString();

  try {
    const db = getDb();
    await db.run(
      "INSERT INTO songs (title, description, lyrics, audio_url, created_at) VALUES (?, ?, ?, ?, ?)",
      [title, description || "", lyrics || "", audioUrl, createdAt]
    );
    res.status(201).json({ success: true, audioUrl });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/api/songs/:id", authenticateToken, upload.single("audio"), async (req, res) => {
  const { id } = req.params;
  const { title, description, lyrics } = req.body;

  try {
    const db = getDb();
    const existing = await db.get("SELECT audio_url FROM songs WHERE id = ?", [id]);

    let audioUrl = existing?.audio_url || "";
    if (req.file) {
      audioUrl = `/uploads/${req.file.filename}`;
      if (existing?.audio_url) {
        const oldFilename = path.basename(existing.audio_url);
        const oldPath = path.join(uploadsDir, oldFilename);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
    }

    await db.run(
      "UPDATE songs SET title = ?, description = ?, lyrics = ?, audio_url = ? WHERE id = ?",
      [title, description || "", lyrics || "", audioUrl, id]
    );

    res.json({ success: true, audioUrl });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/songs/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const song = await db.get("SELECT audio_url FROM songs WHERE id = ?", [id]);
    if (song && song.audio_url) {
      const filename = path.basename(song.audio_url);
      const filePath = path.join(uploadsDir, filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await db.run("DELETE FROM songs WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Serve static frontend build if root dist folder exists
const frontendDistDir = path.resolve(baseDir, "../dist");
if (fs.existsSync(frontendDistDir)) {
  app.use(express.static(frontendDistDir));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api") || req.path.startsWith("/uploads")) {
      return next();
    }
    res.sendFile(path.join(frontendDistDir, "index.html"));
  });
}

// Main startup
async function startServer() {
  try {
    await initDb();
    app.listen(PORT, () => {
      console.log(`Backend server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start backend server:", error);
    process.exit(1);
  }
}

startServer();
