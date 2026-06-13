import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Search, Eye, Trash2, HistoryIcon } from "lucide-react"
import { useRecommendations } from "../hooks/useRecommendations.js"
import { SkeletonCard } from "../components/Loader.jsx"
import EmptyState from "../components/EmptyState.jsx"
import { ZODIAC_SIGNS } from "../utils/constants.js"

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default function History() {
  const { recommendations, loading, error, deleteOne } = useRecommendations()
  const [search, setSearch] = useState("")
  const [zodiac, setZodiac] = useState("")
  const [deletingId, setDeletingId] = useState(null)

  const filtered = useMemo(() => {
    return recommendations.filter((r) => {
      const matchesName = r.fullName
        .toLowerCase()
        .includes(search.trim().toLowerCase())
      const matchesZodiac = zodiac ? r.zodiacSign === zodiac : true
      return matchesName && matchesZodiac
    })
  }, [recommendations, search, zodiac])

  const handleDelete = async (id) => {
    setDeletingId(id)
    try {
      await deleteOne(id)
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-4xl font-semibold">Recommendation History</h1>
        <p className="text-muted-foreground">
          Browse, search, and manage every gemstone reading.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name..."
            className="w-full rounded-xl border border-input bg-card py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </div>
        <select
          value={zodiac}
          onChange={(e) => setZodiac(e.target.value)}
          className="rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30 sm:w-56"
        >
          <option value="">All zodiac signs</option>
          {ZODIAC_SIGNS.map((z) => (
            <option key={z} value={z}>{z}</option>
          ))}
        </select>
      </div>

      {/* Content */}
      <div className="mt-8">
        {loading ? (
          <div className="grid gap-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : error ? (
          <EmptyState
            title="Couldn't load history"
            message={error}
          />
        ) : recommendations.length === 0 ? (
          <EmptyState
            icon={HistoryIcon}
            title="No recommendations yet"
            message="Generate your first gemstone recommendation to start building your history."
            actionLabel="Get a Recommendation"
            actionTo="/recommend"
          />
        ) : filtered.length === 0 ? (
          <EmptyState
            icon={Search}
            title="No matches found"
            message="Try a different name or zodiac filter."
          />
        ) : (
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3">ID</th>
                    <th className="px-5 py-3">Name</th>
                    <th className="px-5 py-3">Zodiac</th>
                    <th className="px-5 py-3">Concern</th>
                    <th className="px-5 py-3">Gemstone</th>
                    <th className="px-5 py-3">Date</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r) => (
                    <tr
                      key={r.id}
                      className="border-b border-border last:border-0 hover:bg-muted/30"
                    >
                      <td className="px-5 py-3 text-muted-foreground">#{r.id}</td>
                      <td className="px-5 py-3 font-medium">{r.fullName}</td>
                      <td className="px-5 py-3">{r.zodiacSign}</td>
                      <td className="px-5 py-3">{r.mainConcern}</td>
                      <td className="px-5 py-3">
                        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent-foreground">
                          {r.recommendedGemstone}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-muted-foreground">
                        {formatDate(r.createdAt)}
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            to={`/result/${r.id}`}
                            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                            aria-label={`View recommendation for ${r.fullName}`}
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(r.id)}
                            disabled={deletingId === r.id}
                            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary disabled:opacity-50"
                            aria-label={`Delete recommendation for ${r.fullName}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
