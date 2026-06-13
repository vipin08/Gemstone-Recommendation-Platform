import { getAllRecommendations } from "../models/recommendationModel.js"

// GET /api/dashboard/stats
export function getDashboardStatsHandler(req, res, next) {
  try {
    const records = getAllRecommendations()
    const total = records.length

    // Count by gemstone.
    const gemstoneCounts = {}
    const zodiacCounts = {}
    for (const r of records) {
      gemstoneCounts[r.recommendedGemstone] =
        (gemstoneCounts[r.recommendedGemstone] || 0) + 1
      zodiacCounts[r.zodiacSign] = (zodiacCounts[r.zodiacSign] || 0) + 1
    }

    let mostRecommended = null
    let maxCount = 0
    for (const [gem, count] of Object.entries(gemstoneCounts)) {
      if (count > maxCount) {
        maxCount = count
        mostRecommended = gem
      }
    }

    const byGemstone = Object.entries(gemstoneCounts).map(([name, value]) => ({
      name,
      value,
    }))
    const byZodiac = Object.entries(zodiacCounts).map(([name, value]) => ({
      name,
      value,
    }))

    res.json({
      success: true,
      data: {
        total,
        mostRecommended,
        mostRecommendedCount: maxCount,
        recent: records.slice(0, 5),
        byGemstone,
        byZodiac,
      },
    })
  } catch (err) {
    next(err)
  }
}
