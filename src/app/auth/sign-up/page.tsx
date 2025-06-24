import ThirdPartyAuth from '@/components/ThirdPartyAuth'
import Link from 'next/link'
import SignUpForm from './SignUpForm'

const SignUp = () => {
  return (
    <>
      <SignUpForm />

      <ThirdPartyAuth />

      <p className="shrink text-center text-zinc-200">
        Already have an account ?
        <Link href="/auth/sign-in" className="ms-1 text-primary">
          <b>Login</b>
        </Link>
      </p>
    </>
  )
}

export default SignUp
