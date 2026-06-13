import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  headers: { "Content-Type": "application/json" },
})

export async function postRecommendation(payload) {
  const { data } = await api.post("/recommend", payload)
  return data.data
}

export async function fetchRecommendations() {
  const { data } = await api.get("/recommendations")
  return data.data
}

export async function fetchRecommendationById(id) {
  const { data } = await api.get(`/recommendations/${id}`)
  return data.data
}

export async function removeRecommendation(id) {
  const { data } = await api.delete(`/recommendations/${id}`)
  return data
}

export async function fetchDashboardStats() {
  const { data } = await api.get("/dashboard/stats")
  return data.data
}

export default api
