'use client'
import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import TextFormInput from '@/components/form/TextFormInput'

const Contact = () => {
  const contactFormSchema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    name: yup.string().required('Please enter your name'),
    subject: yup.string().required('Please enter your subject name'),
    requirement: yup.string().required('Please enter your requirements'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  })
  return (
    <section className="bg-default-100 bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat py-10 dark:bg-default-50 dark:bg-[url('../images/other/bg-lines-2-dark.png')] lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 xl:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium text-default-950 md:text-4xl">
              Assisting you in securing a competitive advantage
            </h2>
            <p className="my-5 text-base font-medium text-default-600">
              Placerat nunc amet sapien neque, purus cras. Elementum viverra
              egestas fames ornare sed arcu. Consectetur cras vitae orci.
            </p>
            <Link
              href=""
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary/20 px-4 text-primary transition-all hover:bg-primary hover:text-white"
            >
              <LuMoveRight className="h-6 w-6" />
            </Link>
          </div>
          <div className="rounded-lg p-8">
            <div className="rounded-md bg-white p-6 dark:bg-default-100">
              <h3 className="text-2xl font-medium text-default-950">
                Feel free to get in touch with us!
              </h3>
              <p className="mt-3 text-base">
                Placerat nunc amet sapien neque, purus cras. Elementum viverra
                egestas fames ornare sed arcu.
              </p>
              <form
                onSubmit={handleSubmit(() => {})}
                className="mt-6 space-y-4"
              >
                <TextFormInput
                  name="name"
                  label="Name"
                  labelClassName="text-default-950"
                  className="h-12  rounded py-4 ps-4 text-default-950  dark:bg-default-50"
                  placeholder="Your Name"
                  control={control}
                  fullWidth
                />
                <TextFormInput
                  name="email"
                  label="Email"
                  type="email"
                  labelClassName="text-default-950"
                  className="h-12  rounded py-4 ps-4 text-default-950  dark:bg-default-50"
                  placeholder="Type Your email"
                  control={control}
                  fullWidth
                />
                <TextFormInput
                  name="subject"
                  label="Subject"
                  className="h-12  rounded py-4 ps-4 text-default-950  dark:bg-default-50"
                  labelClassName="text-default-950"
                  placeholder="Your message subject"
                  control={control}
                  fullWidth
                />
                <button
                  type="submit"
                  className="rounded bg-black px-6 py-2 text-lg text-white"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
