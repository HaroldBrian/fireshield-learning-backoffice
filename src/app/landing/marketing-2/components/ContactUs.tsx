'use client'
import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { LuSend } from 'react-icons/lu'
import * as yup from 'yup'

const ContactUs = () => {
  const contactFormSchema = yup.object({
    name: yup.string().required('Please enter your name'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    subject: yup.string().required('Please enter your subject'),
    message: yup.string().required('Please enter your message'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  })
  return (
    <section id="contact" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Our Contact Us
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            Let&apos;s Begin a Dialogue
          </h2>
          <p className="mt-5 text-lg">
            We&apos;re eager to engage with like-minded individuals. Simply
            greet us, and we&apos;ll embark on a productive collaboration.
            Launch your own journey to success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div>
            <div className="rounded-md border border-default-200 bg-default-50 p-8">
              <form onSubmit={handleSubmit(() => {})} className="relative">
                <h2 className="mb-5 text-2xl font-medium text-default-950">
                  We welcome your feedback
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <TextFormInput
                    name="name"
                    label="Name"
                    labelClassName="text-default-500"
                    className="bg-default-50 px-3 text-sm"
                    placeholder="Your first name..."
                    fullWidth
                    control={control}
                  />
                  <TextFormInput
                    name="email"
                    label="Email"
                    type="email"
                    labelClassName="text-default-500"
                    className="bg-default-50 px-3 text-sm"
                    placeholder="Your email..."
                    fullWidth
                    control={control}
                  />

                  <div className="sm:col-span-2">
                    <TextFormInput
                      name="subject"
                      label="Subject"
                      labelClassName="text-default-500"
                      className="bg-default-50 px-3 text-sm"
                      placeholder="Type subject..."
                      containerClassName="mb-3"
                      fullWidth
                      control={control}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <TextAreaFormInput
                      name="message"
                      label="message"
                      labelClassName="text-default-500"
                      className="bg-default-50 px-3 text-sm"
                      rows={4}
                      placeholder="Type messages..."
                      containerClassName="mb-4"
                      control={control}
                      fullWidth
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex items-center rounded-md bg-primary/90 px-6 py-2 text-white transition-all hover:bg-primary"
                >
                  Send Messages <LuSend className="ms-2 h-5 w-5 rotate-45" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
