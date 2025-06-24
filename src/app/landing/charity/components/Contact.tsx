'use client'
import charity11 from '@/assets/images/landing/charity/img-11.jpg'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const Contact = () => {
  const contactFormSchema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    fName: yup.string().required('Please enter your first name'),
    class: yup.string().required('Please enter your class name'),
    requirement: yup.string().required('Please enter your requirements'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  })
  return (
    <section id="contact" className="py-10 lg:py-20">
      <div className="container">
        <div className="relative z-20">
          <div className="hidden xl:block">
            <div className="before:absolute before:-end-10 before:-top-10 before:-z-10 before:h-24 before:w-24 before:bg-[url('../images/other/dot.svg')]" />
            <div className="after:absolute after:-bottom-10 after:-start-10 after:-z-10 after:h-24 after:w-24 after:bg-[url('../images/other/dot.svg')]" />
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            <div className="group relative">
              <Image
                alt="contactImg"
                src={charity11}
                className="h-full w-full rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl ">
                <div className="flex h-full items-end justify-center">
                  <div className="m-6 mx-auto max-w-md rounded-xl bg-white/10 p-4 text-center backdrop-blur-xl">
                    <h2 className="text-4xl/snug font-medium text-white">
                      Would you like to support our mission?
                    </h2>
                    <p className="mt-5  text-base text-white/80">
                      Complete the form and become a part of our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-md bg-default-100 p-8 dark:bg-default-50">
                <form onSubmit={handleSubmit(() => {})} className="relative">
                  <h2 className="text-2xl font-medium text-default-950">
                    Join Us Today!
                  </h2>
                  <div className="my-6 space-y-6">
                    <TextFormInput
                      name="fName"
                      placeholder="Your first name..."
                      control={control}
                      className="rounded-full border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50"
                      fullWidth
                    />
                    <TextFormInput
                      name="email"
                      placeholder="Your email..."
                      control={control}
                      className="rounded-full border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50"
                      fullWidth
                    />
                    <TextFormInput
                      name="class"
                      placeholder="Studying Class"
                      control={control}
                      className="rounded-full border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50"
                      fullWidth
                    />
                    <TextFormInput
                      name="requirement"
                      placeholder="Type Your Requirements"
                      control={control}
                      className="rounded-full border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50"
                      fullWidth
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-base text-white transition-all hover:bg-primary-700"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
