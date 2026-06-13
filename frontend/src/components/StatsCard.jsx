export default function StatsCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {Icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-primary">
            <Icon className="h-5 w-5" />
          </span>
        )}
      </div>
      <p className="mt-4 font-serif text-3xl font-semibold">{value}</p>
      {sub && <p className="mt-1 text-xs text-muted-foreground">{sub}</p>}
    </div>
  )
}
