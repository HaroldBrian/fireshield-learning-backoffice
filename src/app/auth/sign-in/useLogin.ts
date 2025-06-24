'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as yup from 'yup'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const loginFormSchema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: 'user@coderthemes.com',
      password: 'password',
    },
  })

  type LoginFormFields = yup.InferType<typeof loginFormSchema>

  const login = handleSubmit(async (values: LoginFormFields) => {
    setLoading(true)
    signIn('credentials', {
      redirect: false,
      email: values?.email,
      password: values?.password,
    }).then((res) => {
      if (res?.ok) {
        router.push('/admin/dashboard')
        toast.success('Successfully logged in. Redirecting....', {
          position: 'top-right',
          duration: 2000,
        })
      } else {
        toast.error(res?.error, { position: 'top-right', duration: 2000 })
      }
    })
    setLoading(false)
  })

  return { loading, login, control }
}

export default useLogin
