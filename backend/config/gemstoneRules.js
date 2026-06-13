export const gemstoneRules = {
  "Aries|Career": "Ruby",
  "Taurus|Wealth": "Emerald",
  "Gemini|Education": "Emerald",
  "Cancer|Health": "Pearl",
  "Leo|Career": "Ruby",
  "Virgo|Education": "Emerald",
  "Libra|Marriage": "Diamond",
  "Scorpio|Business": "Red Coral",
  "Sagittarius|Career": "Yellow Sapphire",
  "Capricorn|Wealth": "Blue Sapphire",
  "Aquarius|Technology": "Amethyst",
  "Pisces|Health": "Pearl",
}

// Fallback by zodiac ruling-planet gemstone when no exact rule matches.
export const zodiacFallback = {
  Aries: "Red Coral",
  Taurus: "Diamond",
  Gemini: "Emerald",
  Cancer: "Pearl",
  Leo: "Ruby",
  Virgo: "Emerald",
  Libra: "Diamond",
  Scorpio: "Red Coral",
  Sagittarius: "Yellow Sapphire",
  Capricorn: "Blue Sapphire",
  Aquarius: "Blue Sapphire",
  Pisces: "Yellow Sapphire",
}

// Fallback by concern when zodiac is somehow unknown.
export const concernFallback = {
  Career: "Ruby",
  Wealth: "Yellow Sapphire",
  Education: "Emerald",
  Health: "Pearl",
  Marriage: "Diamond",
  Business: "Red Coral",
  Technology: "Amethyst",
}
