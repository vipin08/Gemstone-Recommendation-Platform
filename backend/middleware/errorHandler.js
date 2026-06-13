// Centralized error handling middleware.
export function errorHandler(err, req, res, next) {
  console.error("[v0] Error:", err.message)
  const status = err.status || 500
  res.status(status).json({
    success: false,
    error: err.message || "Internal Server Error",
  })
}

// 404 handler for unmatched routes.
export function notFound(req, res) {
  res.status(404).json({
    success: false,
    error: `Route not found: ${req.method} ${req.originalUrl}`,
  })
}
