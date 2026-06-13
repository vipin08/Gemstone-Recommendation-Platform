import { recommendGemstone } from "../services/recommendationEngine.js"
import {
  createRecommendation,
  getAllRecommendations,
  getRecommendationById,
  deleteRecommendation,
} from "../models/recommendationModel.js"
import { gemstoneData } from "../config/gemstoneData.js"

// POST /api/recommend
export function createRecommendationHandler(req, res, next) {
  try {
    const data = req.validated
    const { recommendedGemstone, reason, gemstone } = recommendGemstone(data)

    const saved = createRecommendation({ ...data, recommendedGemstone })

    res.status(201).json({
      success: true,
      data: {
        ...saved,
        reason,
        gemstone,
      },
    })
  } catch (err) {
    next(err)
  }
}

// GET /api/recommendations
export function getRecommendationsHandler(req, res, next) {
  try {
    const records = getAllRecommendations()
    res.json({ success: true, data: records })
  } catch (err) {
    next(err)
  }
}

// GET /api/recommendations/:id
export function getRecommendationByIdHandler(req, res, next) {
  try {
    const id = Number(req.params.id)
    const record = getRecommendationById(id)
    if (!record) {
      return res
        .status(404)
        .json({ success: false, error: "Recommendation not found." })
    }
    const gemstone = gemstoneData[record.recommendedGemstone] || null
    res.json({ success: true, data: { ...record, gemstone } })
  } catch (err) {
    next(err)
  }
}

// DELETE /api/recommendations/:id
export function deleteRecommendationHandler(req, res, next) {
  try {
    const id = Number(req.params.id)
    const removed = deleteRecommendation(id)
    if (!removed) {
      return res
        .status(404)
        .json({ success: false, error: "Recommendation not found." })
    }
    res.json({ success: true, message: "Recommendation deleted." })
  } catch (err) {
    next(err)
  }
}
