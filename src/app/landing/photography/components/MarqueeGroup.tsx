const photography = [
  'Wildlife photography',
  'Pet portraits',
  'Nature photography',
  'Wildlife photography',
  'Pet portraits',
  'Nature photography',
]
const MarqueeGroup = () => {
  return (
    <section>
      <div className="relative m-auto flex gap-28 overflow-hidden bg-black py-6">
        <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28">
          {photography.map((item, idx) => (
            <h2 key={idx} className="text-4xl text-white">
              {item}
            </h2>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28"
        >
          {photography.map((item, idx) => (
            <h2 key={idx} className="text-4xl text-white">
              {item}
            </h2>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeGroup
