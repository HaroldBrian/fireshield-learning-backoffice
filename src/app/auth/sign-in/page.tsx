import ThirdPartyAuth from '@/components/ThirdPartyAuth'
import Link from 'next/link'
import LoginForm from './LoginForm'

const SignIn = () => {
  return (
    <>
      <LoginForm />

      <ThirdPartyAuth />

      <p className="shrink text-center text-zinc-200">
        Don&apos;t have an account ?
        <Link href="/auth/sign-up" className="ms-1 text-primary">
          <b>Register</b>
        </Link>
      </p>
    </>
  )
}

export default SignIn
