import { Router } from "express"
import {
  createRecommendationHandler,
  getRecommendationsHandler,
  getRecommendationByIdHandler,
  deleteRecommendationHandler,
} from "../controllers/recommendationController.js"
import { validateRecommendation } from "../middleware/validateRequest.js"

const router = Router()

router.post("/recommend", validateRecommendation, createRecommendationHandler)
router.get("/recommendations", getRecommendationsHandler)
router.get("/recommendations/:id", getRecommendationByIdHandler)
router.delete("/recommendations/:id", deleteRecommendationHandler)

export default router
