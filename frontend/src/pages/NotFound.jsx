import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-serif text-4xl font-semibold">404 — Page not found</h1>
      <p className="mt-4 text-muted-foreground">We couldn't find that page.</p>
      <div className="mt-6">
        <Link to="/" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Go home</Link>
      </div>
    </div>
  )
}
