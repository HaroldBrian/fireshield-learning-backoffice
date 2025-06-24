'use client'
import { LuMoveRight } from 'react-icons/lu'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import charity3 from '@/assets/images/landing/charity/img-3.jpg'
import { useForm } from 'react-hook-form'
import TextFormInput from '@/components/form/TextFormInput'

const Newsletter = () => {
  const newsLetterFormSchema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(newsLetterFormSchema),
  })
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${charity3.src})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container">
        <div className="relative mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mt-4 text-4xl/snug font-medium text-white">
            Stay Informed by Subscribing to Our Newsletter
          </h2>
          <p className="mt-5 text-base text-white/80">
            Receive instant news by subscribing to our daily newsletter.
          </p>
          <form
            onSubmit={handleSubmit(() => {})}
            className="mx-auto mt-6 max-w-xl space-y-2"
          >
            <TextFormInput
              name="email"
              type="email"
              className="h-12 w-full rounded-full  bg-default-50 py-4 pe-16 ps-4 text-default-950"
              control={control}
              placeholder="Type Your Email"
              endButton={
                <button
                  type="submit"
                  className="absolute end-[6px] top-[6px] inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-6 text-white transition-all hover:bg-primary-700"
                >
                  <LuMoveRight className="h-6 w-6" />
                </button>
              }
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
