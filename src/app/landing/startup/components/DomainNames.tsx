import { LuSearch } from 'react-icons/lu'

const DomainNames = () => {
  return (
    <section className="pb-10 lg:pb-20">
      <div className="container">
        <div className="rounded-lg bg-default-100 bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat px-6 py-20 dark:bg-default-50 dark:bg-[url('../images/other/bg-lines-2-dark.png')]">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Domain names
            </span>
            <h2 className="mt-5 text-3xl font-medium text-default-950 md:text-4xl">
              Stay up-to-date with our newsletter.
            </h2>
            <p className="mt-6 text-base text-default-950">
              Nunc egestas, augue at pellentesque laoreet, felis eros vehicula
              leo, at malesuada velit leo quis pede.
            </p>
            <form className="mx-auto mt-6 max-w-2xl space-y-2">
              <div className="relative">
                <input
                  type="email"
                  id="subcribe"
                  className="h-12 w-full rounded-md border-default-200 bg-default-50 py-4 pe-14 ps-4 text-default-950 focus:border-default-200 focus:ring-0"
                  placeholder="Type Your Email"
                  name="email"
                />
                <button
                  type="submit"
                  className="absolute end-[6px] top-[6px] inline-flex h-9 items-center justify-center gap-2 px-3"
                >
                  <LuSearch className="size-6 text-default-950" />
                </button>
                <small>
                  By submitting the form, you acknowledge and agree to our Terms
                  &amp; Conditions and Privacy Policy.
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomainNames
