import { DatabaseSync } from "node:sqlite"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbPath = join(__dirname, "gemaura.db")

export const db = new DatabaseSync(dbPath)

export function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS recommendations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fullName TEXT NOT NULL,
      age INTEGER NOT NULL,
      gender TEXT NOT NULL,
      zodiacSign TEXT NOT NULL,
      occupation TEXT,
      mainConcern TEXT NOT NULL,
      additionalNotes TEXT,
      recommendedGemstone TEXT NOT NULL,
      createdAt TEXT NOT NULL
    )
  `)
  console.log("SQLite database initialized at", dbPath)
}
