const MarqueeGroup = () => {
  return (
    <section>
      <div className="relative m-auto flex gap-28 overflow-hidden bg-black py-6">
        <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28">
          <h2 className="text-4xl text-white">UI-UX Experience</h2>
          <h2 className="text-4xl text-white">Web Development</h2>
          <h2 className="text-4xl text-white">Digital Marketing</h2>
          <h2 className="text-4xl text-white">Product Design</h2>
          <h2 className="text-4xl text-white">Mobile Solutions</h2>
        </div>
        <div
          aria-hidden="true"
          className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28"
        >
          <h2 className="text-4xl text-white">UI-UX Experience</h2>
          <h2 className="text-4xl text-white">Web Development</h2>
          <h2 className="text-4xl text-white">Digital Marketing</h2>
          <h2 className="text-4xl text-white">Product Design</h2>
          <h2 className="text-4xl text-white">Mobile Solutions</h2>
        </div>
      </div>
    </section>
  )
}

export default MarqueeGroup
