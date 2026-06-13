export default function GemCard({ gem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={gem.image || "/placeholder.svg"}
          alt={`${gem.name} gemstone`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg font-semibold">{gem.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {gem.description}
        </p>
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-accent">
          {gem.benefits}
        </p>
      </div>
    </article>
  )
}
