export default function HeroForm() {
  const vectorImage = new URL("../../../Vector.png", import.meta.url).href

  return (
    <div className="flex w-full justify-center">
      <img
        src={vectorImage}
        alt="Decorative gemstone and astrology illustration"
        className="h-auto w-full max-w-[520px] object-contain"
      />
    </div>
  )
}
