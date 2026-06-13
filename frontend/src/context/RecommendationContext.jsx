import { createContext, useContext, useState } from "react"

const RecommendationContext = createContext(null)

export function RecommendationProvider({ children }) {
  const [latestResult, setLatestResult] = useState(null)

  return (
    <RecommendationContext.Provider value={{ latestResult, setLatestResult }}>
      {children}
    </RecommendationContext.Provider>
  )
}

export function useRecommendationContext() {
  const ctx = useContext(RecommendationContext)
  if (!ctx) {
    throw new Error(
      "useRecommendationContext must be used within a RecommendationProvider",
    )
  }
  return ctx
}
