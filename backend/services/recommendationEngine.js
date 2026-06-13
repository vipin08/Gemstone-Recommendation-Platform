import {
  gemstoneRules,
  zodiacFallback,
  concernFallback,
} from "../config/gemstoneRules.js"
import { gemstoneData } from "../config/gemstoneData.js"

export function recommendGemstone({ zodiacSign, mainConcern }) {
  const exactKey = `${zodiacSign}|${mainConcern}`
  let gemstoneName = gemstoneRules[exactKey]
  let reason

  if (gemstoneName) {
    reason = `A ${zodiacSign} focused on ${mainConcern.toLowerCase()} aligns most strongly with ${gemstoneName}, the stone traditionally prescribed for this exact combination.`
  } else if (zodiacFallback[zodiacSign]) {
    gemstoneName = zodiacFallback[zodiacSign]
    reason = `There is no exact rule for a ${zodiacSign} seeking ${mainConcern.toLowerCase()}, so we matched ${gemstoneName} to your zodiac's ruling planet for balanced support.`
  } else if (concernFallback[mainConcern]) {
    gemstoneName = concernFallback[mainConcern]
    reason = `We matched ${gemstoneName} to your main concern of ${mainConcern.toLowerCase()} as a dependable general recommendation.`
  } else {
    gemstoneName = "Yellow Sapphire"
    reason = `We recommend ${gemstoneName}, a universally auspicious stone, as a safe starting point for your journey.`
  }

  const gemstone = gemstoneData[gemstoneName]

  return {
    recommendedGemstone: gemstoneName,
    reason,
    gemstone,
  }
}
