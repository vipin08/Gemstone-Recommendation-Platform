import { Link } from "react-router-dom"
import { Gem } from "lucide-react"

export default function EmptyState({
  icon: Icon = Gem,
  title = "Nothing here yet",
  message = "Once you generate a recommendation, it will show up here.",
  actionLabel,
  actionTo,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card/60 px-6 py-16 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-primary">
        <Icon className="h-8 w-8" />
      </span>
      <h3 className="mt-5 font-serif text-xl font-semibold">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        {message}
      </p>
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
