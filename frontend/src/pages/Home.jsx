import { Link } from "react-router-dom"
import {
  Sparkles,
  Wand2,
  History as HistoryIcon,
  LayoutDashboard,
  Stars,
  ClipboardList,
  Gem,
  ArrowRight,
} from "lucide-react"
import GemCard from "../components/GemCard.jsx"
import HeroForm from "../components/HeroForm.jsx"
import { FEATURED_GEMSTONES } from "../utils/constants.js"

const features = [
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    text: "A rule-based engine matches a stone to your exact zodiac and concern.",
  },
  {
    icon: Stars,
    title: "Zodiac Based Matching",
    text: "Rooted in the ruling planets and traditions behind every sign.",
  },
  {
    icon: HistoryIcon,
    title: "Recommendation History",
    text: "Every reading is saved so you can revisit and compare anytime.",
  },
]

const steps = [
  {
    icon: ClipboardList,
    title: "Enter Details",
    text: "Share your name, age, zodiac sign and your main life concern.",
  },
  {
    icon: Wand2,
    title: "Get Analysis",
    text: "Our engine analyzes your profile against time-tested rules.",
  },
  {
    icon: Gem,
    title: "Receive Recommendation",
    text: "Discover your gemstone with benefits and wearing guidance.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Vedic Gemstone Wisdom
            </p>
            <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Discover the Perfect Gemstone for Your Journey
            </h1>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Personalized gemstone recommendations based on zodiac wisdom and
              life goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/recommend"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Get Recommendation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span>• Free to use</span>
              <span>• 8 curated gemstones</span>
              <span>• Instant analysis</span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <HeroForm />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-stretch">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three simple steps to your personalized gemstone.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <span className="absolute right-6 top-6 font-serif text-4xl font-semibold text-muted">
                {i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured gemstones */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Featured Gemstones
          </h2>
          <p className="mt-3 text-muted-foreground">
            A curated collection, each with its own celestial purpose.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_GEMSTONES.map((gem) => (
            <GemCard key={gem.name} gem={gem} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-primary px-8 py-14 text-center text-primary-foreground">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Ready to find your stone?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed opacity-90">
            Answer a few questions and receive a personalized gemstone
            recommendation in seconds.
          </p>
          <Link
            to="/recommend"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-card px-7 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Get Your Recommendation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
