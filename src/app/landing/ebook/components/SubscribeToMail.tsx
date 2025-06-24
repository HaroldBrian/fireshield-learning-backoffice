'use client'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import * as yup from 'yup'

import ebook6 from '@/assets/images/landing/ebook/img-6.jpg'
import ebook7 from '@/assets/images/landing/ebook/img-7.jpg'
import ebook8 from '@/assets/images/landing/ebook/img-8.jpg'
import ebook9 from '@/assets/images/landing/ebook/img-9.jpg'
import ebook10 from '@/assets/images/landing/ebook/img-10.jpg'

const bookImages = [ebook6, ebook7, ebook8, ebook9, ebook10]
const SubscribeToMail = () => {
  const subscribeFormSchema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(subscribeFormSchema),
  })
  return (
    <section className="bg-default-100 dark:bg-default-50">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl/tight font-medium text-default-950">
              Elevate Your Life with Ebooks Authored by Experts
            </h2>
            <p className="mt-4  text-base">
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
              nunc, eu sollicitudin and urna dolor sagittis lacus. Vestibulum
              fringilla pede sit amet augue.
            </p>
            <div className="mt-10 max-w-xl rounded-md bg-white backdrop-blur-2xl dark:bg-default-100">
              <form onSubmit={handleSubmit(() => {})}>
                <TextFormInput
                  name="email"
                  type="email"
                  fullWidth
                  className="h-14 w-full border-0 bg-transparent p-4 placeholder:text-default-950 focus:outline-none"
                  placeholder="Enter Your Email"
                  endButton={
                    <button
                      type="submit"
                      className="absolute end-[6px] top-[6px] me-2 inline-flex items-center  justify-center  rounded-md border-0 bg-primary px-6 py-2 text-base font-semibold text-white backdrop-blur-2xl transition-all hover:bg-primary-700"
                    >
                      <span>Submit</span>
                    </button>
                  }
                  control={control}
                  noValidate
                />
              </form>
            </div>
          </div>
          <div>
            <div className="mx-auto h-[495px] overflow-hidden">
              <div className="marquee grid grid-cols-2 gap-4 lg:gap-0">
                <div className="relative m-auto flex flex-col gap-6 overflow-hidden">
                  <div className="marquee-hero flex h-full min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                    {bookImages.map((image, idx) => (
                      <Image
                        alt="ebook-image"
                        key={idx}
                        className="aspect-1 h-full w-60 object-cover"
                        src={image}
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                  >
                    {bookImages.map((image, idx) => (
                      <Image
                        alt="ebook-image"
                        key={idx}
                        className="aspect-1 h-full w-60 object-cover"
                        src={image}
                      />
                    ))}
                  </div>
                </div>
                <div className="marquee-reverse m-auto flex flex-col gap-6 overflow-hidden">
                  <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                    {bookImages.map((image, idx) => (
                      <Image
                        alt="ebook-image"
                        key={idx}
                        className="aspect-1 h-full w-60 object-cover"
                        src={image}
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                  >
                    {bookImages.map((image, idx) => (
                      <Image
                        alt="ebook-image"
                        key={idx}
                        className="aspect-1 h-full w-60 object-cover"
                        src={image}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeToMail
