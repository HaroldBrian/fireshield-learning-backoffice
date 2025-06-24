const MarqueeGroup = () => {
  return (
    <section>
      <div className="relative m-auto flex gap-28 overflow-hidden bg-default-100 py-4 dark:bg-default-50">
        <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28">
          <h2 className="text-4xl font-normal text-default-950">
            UI-UX Experience
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Web Development
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Digital Marketing
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Product Design
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Mobile Solutions
          </h2>
        </div>
        <div
          aria-hidden="true"
          className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28"
        >
          <h2 className="text-4xl font-normal text-default-950">
            UI-UX Experience
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Web Development
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Digital Marketing
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Product Design
          </h2>
          <h2 className="text-4xl font-normal text-default-950">
            Mobile Solutions
          </h2>
        </div>
      </div>
    </section>
  )
}

export default MarqueeGroup
