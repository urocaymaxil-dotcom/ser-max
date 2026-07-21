
# Personal Website Portfolio (Maxil S. Urocay, MSCS)

This is a full-stack personal portfolio website for **Maxil S. Urocay, MSCS** — College Instructor, Computer Scientist, Event Host, Public Speaker, and Youth Leader.

## Project Architecture

- **Frontend**: React, Vite, TypeScript, Tailwind CSS, Lucide Icons, Motion / Framer Motion, Radix UI.
- **Backend (`/server`)**: Node.js, Express, TypeScript, SQLite database (`sqlite3` / `sqlite`), Multer (file uploads for certs & gallery), CORS.

---

## Getting Started

### 1. Prerequisites
Ensure Node.js (v18+) and npm are installed.

### 2. Install Dependencies

#### Install Frontend Dependencies:
```bash
npm install
```

#### Install Backend Dependencies:
```bash
cd server
npm install
cd ..
```

---

## Running the Application

### Option A: Run Both Frontend & Backend Concurrently
From the root directory:
```bash
npm run dev:all
```

- **Frontend**: Available at `http://localhost:5173`
- **Backend API**: Available at `http://localhost:3001`

### Option B: Run Services Separately

1. **Start Backend Server**:
   ```bash
   cd server
   npm run dev
   ```
   *The server initializes `server/database.sqlite` automatically on startup.*

2. **Start Frontend Dev Server**:
   ```bash
   npm run dev
   ```

---

## Backend Features & Admin Control Panel

- **Contact Form Messages API**: `POST /api/contact`, `GET /api/contact`, `PATCH /api/contact/:id`, `DELETE /api/contact/:id`.
- **Certificates Management API**: `GET /api/certificates`, `POST /api/certificates/:id/upload`.
- **Photo Gallery Management API**: `GET /api/gallery`, `POST /api/gallery/upload`, `DELETE /api/gallery/:id`.
- **Built-in Admin Drawer**: Click the floating Shield/Admin icon in the bottom-right corner of the website to manage messages, replace certificate images, or upload new gallery items.

  