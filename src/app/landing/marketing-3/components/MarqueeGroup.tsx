const marketing = ['eCommerce', 'Development', 'Social media', 'Consultation']
const MarqueeGroup = () => {
  return (
    <section className="pb-10 pt-20">
      <div className="relative m-auto flex gap-10 overflow-hidden border-y border-default-200 py-8">
        <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-10">
          <div className="py-3">
            <h2 className="flex text-5xl font-medium text-default-950">
              Built for online marketing
            </h2>
          </div>
          {marketing.map((item, idx) => (
            <div className="py-3" key={idx}>
              <h2 className="text-5xl font-medium text-default-950">{item}</h2>
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-10"
        >
          <div className="py-3">
            <h2 className="flex text-5xl font-medium text-default-950">
              Built for online marketing
            </h2>
          </div>
          {marketing.map((item, idx) => (
            <div className="py-3" key={idx}>
              <h2 className="text-5xl font-medium text-default-950">{item}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeGroup
