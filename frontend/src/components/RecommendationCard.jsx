import { Check, Hammer, CalendarDays, Sparkles } from "lucide-react"

export default function RecommendationCard({ result }) {
  const { gemstone, reason, recommendedGemstone, fullName, zodiacSign, mainConcern } = result
  const gem = gemstone || {}

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-md">
      <div className="grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative bg-muted">
          <img
            src={gem.imageUrl || "/placeholder.svg"}
            alt={`${recommendedGemstone} gemstone`}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Your Match
          </span>
        </div>

        {/* Details side */}
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Recommended for {fullName}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold">
            {recommendedGemstone}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {gem.description}
          </p>

          <div className="mt-6">
            <h3 className="font-sans text-sm font-semibold">Benefits</h3>
            <ul className="mt-3 space-y-2">
              {(gem.benefits || []).map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl bg-muted/60 p-4">
            <div className="flex items-start gap-2">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold">Why recommended</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {reason}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border p-3">
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Hammer className="h-3.5 w-3.5" /> Suitable Metal
              </p>
              <p className="mt-1 text-sm font-medium">{gem.suitableMetal}</p>
            </div>
            <div className="rounded-xl border border-border p-3">
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" /> Suitable Day
              </p>
              <p className="mt-1 text-sm font-medium">{gem.suitableDay}</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-border p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Wearing Instructions
            </p>
            <p className="mt-1.5 text-sm leading-relaxed">
              {gem.wearingInstructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
