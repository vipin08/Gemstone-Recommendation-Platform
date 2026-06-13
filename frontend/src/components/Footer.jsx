import { Link } from "react-router-dom"
import { Gem } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Gem className="h-5 w-5" />
            </span>
            <span className="font-serif text-xl font-semibold">GemAura</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Personalized gemstone recommendations rooted in zodiac wisdom and
            your life goals.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h4 className="font-sans text-sm font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/recommend" className="hover:text-foreground">Recommendation</Link></li>
              <li><Link to="/history" className="hover:text-foreground">History</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold">Gemstones</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Ruby &amp; Emerald</li>
              <li>Pearl &amp; Diamond</li>
              <li>Sapphires &amp; more</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} GemAura. Crafted with zodiac wisdom.
      </div>
    </footer>
  )
}
