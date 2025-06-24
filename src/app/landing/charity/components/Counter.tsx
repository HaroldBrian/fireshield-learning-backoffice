import charityBackgroundImg from '@/assets/images/landing/charity/bg-2.png'

const Counter = () => {
  return (
    <section
      className="bg-black bg-bottom py-20"
      style={{ backgroundImage: `url(${charityBackgroundImg.src})` }}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white">20 Billion</h2>
            <p className="mt-2  text-base text-white/80">Raised to Date</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white">123</h2>
            <p className="mt-2 text-base text-white/80">Countries Impacting</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white">30K+</h2>
            <p className="mt-2 text-base text-white/80">Volunteers</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-medium text-white">218</h2>
            <p className="mt-2 text-base text-white/80">Successful Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
