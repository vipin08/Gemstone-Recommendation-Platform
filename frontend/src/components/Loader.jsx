import { Loader2 } from "lucide-react"

export function Loader({ label = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm">{label}</p>
    </div>
  )
}

// Generic skeleton block.
export function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse rounded-lg bg-muted ${className}`} />
  )
}

// Skeleton card row used for table/list loading states.
export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="mt-3 h-4 w-2/3" />
      <Skeleton className="mt-2 h-4 w-1/2" />
    </div>
  )
}
