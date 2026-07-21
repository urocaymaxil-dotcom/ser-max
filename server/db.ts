import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import path from "path";
import bcrypt from "bcryptjs";
import fs from "fs";

const dbPath = path.join(__dirname, "database.sqlite");

let db: Database<sqlite3.Database, sqlite3.Statement>;

export async function initDb() {
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // Enable foreign keys
  await db.run("PRAGMA foreign_keys = ON;");

  // Create tables
  await db.exec(`
    CREATE TABLE IF NOT EXISTS admin (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password_hash TEXT
    );

    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      subject TEXT,
      message TEXT,
      created_at TEXT,
      is_read INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS certificates (
      id TEXT PRIMARY KEY,
      title TEXT,
      image_url TEXT,
      updated_at TEXT
    );

    CREATE TABLE IF NOT EXISTS gallery (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      category TEXT DEFAULT 'Memories',
      event_date TEXT,
      image_url TEXT,
      created_at TEXT
    );

    CREATE TABLE IF NOT EXISTS songs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      lyrics TEXT,
      audio_url TEXT,
      cover_url TEXT,
      plays_count INTEGER DEFAULT 0,
      created_at TEXT
    );
  `);

  // Migrate existing tables if columns are missing
  try {
    const tableInfo = await db.all("PRAGMA table_info(gallery);");
    const hasCategory = tableInfo.some((col: any) => col.name === "category");
    const hasEventDate = tableInfo.some((col: any) => col.name === "event_date");

    if (!hasCategory) {
      await db.exec("ALTER TABLE gallery ADD COLUMN category TEXT DEFAULT 'Memories';");
    }
    if (!hasEventDate) {
      await db.exec("ALTER TABLE gallery ADD COLUMN event_date TEXT;");
    }

    const songsInfo = await db.all("PRAGMA table_info(songs);");
    const hasPlaysCount = songsInfo.some((col: any) => col.name === "plays_count");
    if (!hasPlaysCount) {
      await db.exec("ALTER TABLE songs ADD COLUMN plays_count INTEGER DEFAULT 0;");
    }
  } catch (e) {
    console.warn("Migration warning for tables:", e);
  }

  // Seed and update Walk Through the Storm inspirational song
  const walkStormSong = {
    title: "Walk Through the Storm",
    description: "Original Inspirational Song by SER MAX — A powerful message of hope, endurance, and faith for everyone facing silent battles.",
    lyrics: `Verse 1

There are days the sky turns gray,
When every dream feels far away.
Your tired heart begins to break,
Wondering how much more it can take.

The road is long, the climb is steep,
Some scars are hidden, buried deep.
But every tear you've cried before,
Is building someone stronger than before.

Pre-Chorus

So don't let go, don't lose your flame,
The world will know your name someday.
The night may last a little while,
But morning always finds a smile.

Chorus

Keep fighting, even when you're tired,
Even when your hope has lost its fire.
One more step, one more prayer,
Someone believes you're getting there.

The mountain bows to those who stay,
Who never quit along the way.
Your story isn't over yet,
The sun still rises, don't forget.

Keep fighting...
Your breakthrough's closer than you think.

Verse 2

You've carried burdens no one sees,
Still standing through the strongest breeze.
The strongest souls aren't born from ease,
They're shaped by storms and victories.

It's okay to stop and breathe,
To rest beneath the quiet trees.
Rest is not the same as fear,
You'll stand again, your purpose's near.

Bridge

If your hands are shaking,
Lift them anyway.

If your eyes are crying,
Look toward another day.

Every heartbeat whispers,
"You were made for more."

The battle isn't ending—
It's opening a new door.

Final Chorus

Keep fighting, even when you're broken,
Even when no hopeful words are spoken.
You're stronger than yesterday,
And brighter with each passing day.

No storm can steal what God has planned,
No fear can stop a faithful stand.
Walk slowly if you need to do,
Just never stop believing you.

Outro

When your strength is almost gone,
Borrow hope until the dawn.

When you cannot run...
Walk.

When you cannot walk...
Crawl.

But never...
Never turn back.

Because tomorrow
might become
the day
your miracle begins.

Tagline (Spoken Ending)

"To everyone carrying silent battles... You are seen. You are valued. Rest if you must—but never surrender. Walk slowly if you need to, but never walk backward. Your story is still being written."`,
    audio_url: "/uploads/walk_through_the_storm.mp3",
    created_at: new Date().toISOString()
  };

  const existingWalkStorm = await db.get("SELECT id FROM songs WHERE title LIKE ?", ["%Walk Through the Storm%"]);
  if (existingWalkStorm) {
    await db.run(
      "UPDATE songs SET title = ?, description = ?, lyrics = ?, audio_url = ? WHERE id = ?",
      [walkStormSong.title, walkStormSong.description, walkStormSong.lyrics, walkStormSong.audio_url, existingWalkStorm.id]
    );
  } else {
    await db.run(
      "INSERT INTO songs (title, description, lyrics, audio_url, created_at) VALUES (?, ?, ?, ?, ?)",
      [walkStormSong.title, walkStormSong.description, walkStormSong.lyrics, walkStormSong.audio_url, walkStormSong.created_at]
    );
  }

  // Seed and update Rise & Shine Beyond Limits inspirational song
  const riseAndShineSong = {
    title: "Rise & Shine Beyond Limits",
    description: "Original Inspirational Song by SER MAX — An uplifting anthem about perseverance, education, leadership, and lighting the way for others.",
    lyrics: `Verse 1

From quiet dreams to brighter days,
Every challenge shaped my ways.
Through every lesson, every climb,
I found my purpose one step at a time.

From classroom halls to open skies,
Knowledge gives our dreams their rise.
We learn, we lead, we lift as one,
Until tomorrow's race is won.

Pre-Chorus

The road is long, the night is cold,
But every heart is made of gold.
Stand back up, don't fear the fall,
Your greatest chapter starts with one small call.

Chorus

Rise and shine beyond the limits,
Break the walls and never quit.
Light the future, lead the way,
Turn your dreams into today.

Lift another, hold the line,
Your success can help others shine.
Together we can change the world,
One brave heart, one dream unfurled.

Verse 2

Every failure taught me grace,
Every setback built my pace.
The strongest people aren't the ones
Who never fall beneath the sun.

They're the souls who choose to stand,
Helping others lend a hand.
Building hope where fear once stayed,
Lighting paths that never fade.

Bridge

Teach with wisdom.
Lead with heart.
Serve with courage.
Dream your part.

When the world says "You can't win,"
Answer with the strength within.

The future isn't built by chance,
It's built by those who choose to advance.

Final Chorus

Rise and shine beyond the limits,
Every dream is worth the risk.
Lead with kindness, stand up tall,
Your light was never meant to fall.

Inspire minds and change a life,
Turn every struggle into light.
Together we can leave our mark,
Be the flame that lights the dark.

Rise and shine...
Beyond limits.`,
    audio_url: "/uploads/rise_and_shine_beyond_limits.mp3",
    created_at: new Date().toISOString()
  };

  const existingRiseShine = await db.get("SELECT id FROM songs WHERE title LIKE ?", ["%Rise & Shine Beyond Limits%"]);
  if (existingRiseShine) {
    await db.run(
      "UPDATE songs SET title = ?, description = ?, lyrics = ?, audio_url = ? WHERE id = ?",
      [riseAndShineSong.title, riseAndShineSong.description, riseAndShineSong.lyrics, riseAndShineSong.audio_url, existingRiseShine.id]
    );
  } else {
    await db.run(
      "INSERT INTO songs (title, description, lyrics, audio_url, created_at) VALUES (?, ?, ?, ?, ?)",
      [riseAndShineSong.title, riseAndShineSong.description, riseAndShineSong.lyrics, riseAndShineSong.audio_url, riseAndShineSong.created_at]
    );
  }

  // Seed and update Walk Slowly, Never Backward inspirational song
  const walkSlowlySong = {
    title: "Walk Slowly, Never Backward",
    description: "Original Anthem by SER MAX — An Anthem of Hope, Purpose, and Courage. Encouraging everyone to walk with faith, lift others, and keep moving forward.",
    lyrics: `Verse 1

When the mountain stands before my eyes,
And every dream feels far beyond the skies,
I'll carry hope with every step I take,
For every challenge helps my spirit wake.

From humble roads where silent dreamers start,
To classrooms shaping every hopeful heart,
I learned that greatness isn't found in speed,
But in the strength to rise when others need.

Pre-Chorus

The night may whisper, "You should let it go,"
But deep inside, my faith still softly grows.
Every lesson, every scar I've known,
Has built the path that leads me home.

Chorus

I will walk slowly, but I'll never walk backward,
Every step I take will make tomorrow brighter.
Through every storm, through every trial,
I'll keep believing mile by mile.

I'll lift the ones who lost their way,
And help them find a brighter day.
Together we can rise much higher,
One heart, one hope, one endless fire.

Verse 2

I've seen the weight of weary eyes,
The silent tears, the hidden cries.
So if you're tired, then rest awhile,
But never lose your reason to smile.

Knowledge grows when kindness leads,
Hope is planted through our deeds.
The strongest light the world can see,
Begins with those who choose to believe.

Bridge

Keep learning.
Keep serving.
Keep leading.
Keep believing.

The world is changed by those who care,
Who choose to love, who choose to share.

No dream is small.
No life is weak.
The future belongs
To those who seek.

Final Chorus

I will walk slowly, but I'll never walk backward,
Every sunrise brings another answer.
I'll stand for truth, I'll stand for hope,
I'll teach the world we're built to cope.

Through every heart that I inspire,
May courage burn like endless fire.
Our greatest legacy will be,
The lives we changed... faithfully.

Walk slowly...

Never backward...

Keep moving forward.

Spoken Outro

"Success is not about reaching the finish line before everyone else. It is about moving forward with purpose, lifting others along the way, and leaving every life you touch better than you found it. Walk slowly if you must—but never walk backward."`,
    audio_url: "/uploads/walk_slowly_never_backward.mp3",
    created_at: new Date().toISOString()
  };

  const existingWalkSlowly = await db.get("SELECT id FROM songs WHERE title LIKE ?", ["%Walk Slowly, Never Backward%"]);
  if (existingWalkSlowly) {
    await db.run(
      "UPDATE songs SET title = ?, description = ?, lyrics = ?, audio_url = ? WHERE id = ?",
      [walkSlowlySong.title, walkSlowlySong.description, walkSlowlySong.lyrics, walkSlowlySong.audio_url, existingWalkSlowly.id]
    );
  } else {
    await db.run(
      "INSERT INTO songs (title, description, lyrics, audio_url, created_at) VALUES (?, ?, ?, ?, ?)",
      [walkSlowlySong.title, walkSlowlySong.description, walkSlowlySong.lyrics, walkSlowlySong.audio_url, walkSlowlySong.created_at]
    );
  }

  // Upsert high-security admin account
  const defaultUser = "SerMax";
  const defaultPassword = "SerMax#2026!UltraQuantumSecurePass$99";
  const hashedPassword = await bcrypt.hash(defaultPassword, 12);

  const adminExists = await db.get("SELECT id FROM admin LIMIT 1");
  if (!adminExists) {
    await db.run(
      "INSERT INTO admin (username, password_hash) VALUES (?, ?)",
      [defaultUser, hashedPassword]
    );
  } else {
    await db.run(
      "UPDATE admin SET username = ?, password_hash = ? WHERE id = (SELECT id FROM admin LIMIT 1)",
      [defaultUser, hashedPassword]
    );
  }

  console.log("==================================================");
  console.log("HIGH-SECURITY ADMIN ACCOUNT INITIALIZED / UPDATED:");
  console.log(`Username: ${defaultUser}`);
  console.log(`Password: ${defaultPassword}`);
  console.log("Bcrypt Salt Rounds: 12 (Cryptographically Secured)");
  console.log("==================================================");

  return db;
}

export function getDb() {
  if (!db) {
    throw new Error("Database not initialized! Call initDb() first.");
  }
  return db;
}
