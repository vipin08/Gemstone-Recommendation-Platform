import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, Check, RefreshCw } from "lucide-react"
import RecommendationCard from "../components/RecommendationCard.jsx"
import { Loader } from "../components/Loader.jsx"
import EmptyState from "../components/EmptyState.jsx"
import { useRecommendationContext } from "../context/RecommendationContext.jsx"
import { fetchRecommendationById } from "../services/api.js"

export default function RecommendationResult() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { latestResult } = useRecommendationContext()
  const [result, setResult] = useState(id ? null : latestResult)
  const [loading, setLoading] = useState(Boolean(id))
  const [error, setError] = useState(null)

  // When viewing a saved recommendation by id, fetch it.
  useEffect(() => {
    if (!id) return
    let active = true
    setLoading(true)
    fetchRecommendationById(id)
      .then((data) => active && setResult(data))
      .catch((err) =>
        active &&
        setError(err.response?.data?.error || "Could not load recommendation."),
      )
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [id])

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Loader label="Loading your recommendation..." />
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <EmptyState
          title="No recommendation to show"
          message={error || "Start by filling out the recommendation form."}
          actionLabel="Get a Recommendation"
          actionTo="/recommend"
        />
      </div>
    )
  }

  // A result coming straight from the form is already "saved" by the backend.
  const isSaved = true

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Link
        to="/recommend"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> New search
      </Link>

      <div className="mt-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Your Recommendation
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold">
          The stars suggest {result.recommendedGemstone}
        </h1>
      </div>

      <div className="mt-10">
        <RecommendationCard result={result} />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2.5 text-sm font-medium text-muted-foreground">
          <Check className="h-4 w-4 text-primary" /> Saved to your history
        </div>
        <button
          onClick={() => navigate("/recommend")}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          <RefreshCw className="h-4 w-4" /> New Recommendation
        </button>
        <Link
          to="/history"
          className="inline-flex items-center rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
        >
          View History
        </Link>
      </div>
    </div>
  )
}
