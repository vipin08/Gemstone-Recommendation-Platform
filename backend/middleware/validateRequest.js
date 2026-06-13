const ZODIAC_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
]
const GENDERS = ["Male", "Female", "Other"]
const CONCERNS = [
  "Career", "Wealth", "Education", "Health", "Marriage", "Business", "Technology",
]

const sanitize = (value) =>
  typeof value === "string" ? value.trim().replace(/[<>]/g, "") : value

// Validates and sanitizes the recommendation request body.
export function validateRecommendation(req, res, next) {
  const errors = []
  const body = req.body || {}

  const fullName = sanitize(body.fullName)
  const age = Number(body.age)
  const gender = sanitize(body.gender)
  const zodiacSign = sanitize(body.zodiacSign)
  const occupation = sanitize(body.occupation)
  const mainConcern = sanitize(body.mainConcern)
  const additionalNotes = sanitize(body.additionalNotes)

  if (!fullName || fullName.length < 3) {
    errors.push("Full name is required and must be at least 3 characters.")
  }
  if (!Number.isFinite(age) || age < 1 || age > 120) {
    errors.push("Age must be a number between 1 and 120.")
  }
  if (!GENDERS.includes(gender)) {
    errors.push("Gender must be Male, Female, or Other.")
  }
  if (!ZODIAC_SIGNS.includes(zodiacSign)) {
    errors.push("A valid zodiac sign is required.")
  }
  if (!CONCERNS.includes(mainConcern)) {
    errors.push("A valid main concern is required.")
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, error: errors.join(" ") })
  }

  // Attach sanitized values for downstream handlers.
  req.validated = {
    fullName,
    age,
    gender,
    zodiacSign,
    occupation,
    mainConcern,
    additionalNotes,
  }
  next()
}
