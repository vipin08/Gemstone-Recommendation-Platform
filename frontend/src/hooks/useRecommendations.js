import { useCallback, useEffect, useState } from "react"
import {
  fetchRecommendations,
  removeRecommendation,
} from "../services/api"

// Loads and manages the list of saved recommendations.
export function useRecommendations() {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchRecommendations()
      setRecommendations(data)
    } catch (err) {
      setError(err.response?.data?.error || "Failed to load recommendations.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const deleteOne = useCallback(async (id) => {
    await removeRecommendation(id)
    setRecommendations((prev) => prev.filter((r) => r.id !== id))
  }, [])

  return { recommendations, loading, error, reload: load, deleteOne }
}
