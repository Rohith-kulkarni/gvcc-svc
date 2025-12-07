import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = await open({
  filename: "data.db",
  driver: sqlite3.Database,
});

await db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  );
`);

await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category TEXT,
  short_desc TEXT,
  long_desc TEXT,
  price DECIMAL(10, 2),
  image_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`);
await db.exec(`CREATE TABLE IF NOT EXISTS enquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id)
);`);

export default db;
