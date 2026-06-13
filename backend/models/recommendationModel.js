import { db } from "../database/database.js"

export function createRecommendation(data) {
  const stmt = db.prepare(`
    INSERT INTO recommendations
      (fullName, age, gender, zodiacSign, occupation, mainConcern, additionalNotes, recommendedGemstone, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
  const createdAt = new Date().toISOString()
  const result = stmt.run(
    data.fullName,
    data.age,
    data.gender,
    data.zodiacSign,
    data.occupation || "",
    data.mainConcern,
    data.additionalNotes || "",
    data.recommendedGemstone,
    createdAt,
  )
  return getRecommendationById(Number(result.lastInsertRowid))
}

export function getAllRecommendations() {
  return db
    .prepare("SELECT * FROM recommendations ORDER BY datetime(createdAt) DESC")
    .all()
}

export function getRecommendationById(id) {
  return db.prepare("SELECT * FROM recommendations WHERE id = ?").get(id)
}

export function deleteRecommendation(id) {
  const result = db.prepare("DELETE FROM recommendations WHERE id = ?").run(id)
  return result.changes > 0
}
