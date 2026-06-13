import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, Sparkles } from "lucide-react"
import { ZODIAC_SIGNS, GENDERS, CONCERNS } from "../utils/constants.js"
import { postRecommendation } from "../services/api.js"
import { useRecommendationContext } from "../context/RecommendationContext.jsx"

const schema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters."),
  age: z.coerce
    .number({ invalid_type_error: "Age is required." })
    .int("Age must be a whole number.")
    .min(1, "Age must be at least 1.")
    .max(120, "Age must be 120 or less."),
  gender: z.enum(GENDERS, { errorMap: () => ({ message: "Select a gender." }) }),
  zodiacSign: z.enum(ZODIAC_SIGNS, {
    errorMap: () => ({ message: "Select a zodiac sign." }),
  }),
  occupation: z.string().trim().optional(),
  mainConcern: z.enum(CONCERNS, {
    errorMap: () => ({ message: "Select your main concern." }),
  }),
  additionalNotes: z.string().trim().optional(),
})

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
const labelClass = "block text-sm font-medium"
const errClass = "mt-1 text-xs text-primary"

export default function RecommendationForm() {
  const navigate = useNavigate()
  const { setLatestResult } = useRecommendationContext()
  const [serverError, setServerError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { gender: "", zodiacSign: "", mainConcern: "" },
  })

  const onSubmit = async (values) => {
    setServerError(null)
    try {
      const result = await postRecommendation(values)
      setLatestResult(result)
      navigate("/result")
    } catch (err) {
      setServerError(
        err.response?.data?.error || "Something went wrong. Please try again.",
      )
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Find Your Match
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold">
          Tell us about yourself
        </h1>
        <p className="mt-3 text-muted-foreground">
          Share a few details and we will recommend the gemstone aligned with
          your journey.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
        noValidate
      >
        {serverError && (
          <div className="mb-6 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary">
            {serverError}
          </div>
        )}

        {/* Section: Personal */}
        <h2 className="font-serif text-lg font-semibold">Personal Details</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              className={fieldClass}
              placeholder="Enter your full name"
              {...register("fullName")}
            />
            {errors.fullName && <p className={errClass}>{errors.fullName.message}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              className={fieldClass}
              placeholder="e.g. 28"
              {...register("age")}
            />
            {errors.age && <p className={errClass}>{errors.age.message}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor="gender">Gender</label>
            <select id="gender" className={fieldClass} {...register("gender")}>
              <option value="">Select gender</option>
              {GENDERS.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            {errors.gender && <p className={errClass}>{errors.gender.message}</p>}
          </div>
        </div>

        {/* Section: Astro */}
        <h2 className="mt-8 font-serif text-lg font-semibold">Astrological Profile</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="zodiacSign">Zodiac Sign</label>
            <select id="zodiacSign" className={fieldClass} {...register("zodiacSign")}>
              <option value="">Select your sign</option>
              {ZODIAC_SIGNS.map((z) => (
                <option key={z} value={z}>{z}</option>
              ))}
            </select>
            {errors.zodiacSign && <p className={errClass}>{errors.zodiacSign.message}</p>}
          </div>

          <div>
            <label className={labelClass} htmlFor="mainConcern">Main Concern</label>
            <select id="mainConcern" className={fieldClass} {...register("mainConcern")}>
              <option value="">Select a concern</option>
              {CONCERNS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.mainConcern && <p className={errClass}>{errors.mainConcern.message}</p>}
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="occupation">
              Occupation <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              id="occupation"
              className={fieldClass}
              placeholder="e.g. Software Engineer"
              {...register("occupation")}
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="additionalNotes">
              Additional Notes <span className="text-muted-foreground">(optional)</span>
            </label>
            <textarea
              id="additionalNotes"
              rows={3}
              className={fieldClass}
              placeholder="Anything else you'd like to share..."
              {...register("additionalNotes")}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Reading your chart...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" /> Find My Gemstone
            </>
          )}
        </button>
      </form>
    </div>
  )
}
