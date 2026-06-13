import { Router } from "express"
import { getDashboardStatsHandler } from "../controllers/dashboardController.js"

const router = Router()

router.get("/dashboard/stats", getDashboardStatsHandler)

export default router
