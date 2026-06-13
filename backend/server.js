import express from "express"
import cors from "cors"
import { createServer } from "node:http"
import { initDatabase } from "./database/database.js"
import recommendationRoutes from "./routes/recommendationRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import { errorHandler, notFound } from "./middleware/errorHandler.js"

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

// Initialize the database (creates tables if missing).
initDatabase()

// API routes
app.get("/api/health", (req, res) => res.json({ success: true, status: "ok" }))
app.use("/api", recommendationRoutes)
app.use("/api", dashboardRoutes)

// 404 + error handling
app.use(notFound)
app.use(errorHandler)

function tryListen(port, attempt = 0) {
  const server = createServer(app)

  server.on("error", (err) => {
    if (err && err.code === "EADDRINUSE") {
      const next = port + 1
      console.warn(`Port ${port} in use. Trying ${next}...`)
      if (attempt >= 10) {
        console.error(`Could not find a free port after ${attempt} attempts.`)
        process.exit(1)
      }
      setTimeout(() => tryListen(next, attempt + 1), 200)
    } else {
      console.error(err)
      process.exit(1)
    }
  })

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
}

const startPort = Number(process.env.PORT) || PORT
tryListen(startPort)
