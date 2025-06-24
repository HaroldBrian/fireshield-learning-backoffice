'use client'
import TextFormInput from '@/components/form/TextFormInput'
import PasswordFormInput from '@/components/form/PasswordFormInput'
import useLogin from './useLogin'
import Link from 'next/link'

const LoginForm = () => {
  const { loading, login, control } = useLogin()

  return (
    <form className="shrink" onSubmit={login}>
      <TextFormInput
        containerClassName="mb-4"
        label="Email Address"
        name="email"
        labelClassName="block text-base/normal text-zinc-200"
        className="block rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
        fullWidth
        control={control}
      />

      <PasswordFormInput
        label="Password"
        containerClassName="mb-4"
        name="password"
        labelClassName="block text-base/normal text-zinc-200"
        fullWidth
        className="block w-full rounded border-white/10 bg-transparent py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
        control={control}
      />

      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2">
        <div className="inline-flex items-center">
          <input
            type="checkbox"
            className="size-4 rounded border-white/20 bg-white/20 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/60 focus:ring-offset-0"
            id="checkbox-signin"
          />
          <label
            className="ms-2 select-none align-middle text-base/none text-zinc-200"
            htmlFor="checkbox-signin"
          >
            Remember me
          </label>
        </div>
        <Link
          href="/auth/forgot-pass"
          className="border-b border-dashed text-zinc-200"
        >
          <small>Forgot your password?</small>
        </Link>
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className="group mt-5 inline-flex w-full items-center justify-center rounded bg-primary px-6 py-2.5 text-white backdrop-blur-2xl transition-all hover:bg-primary-700 hover:text-white"
        >
          Log In
        </button>
      </div>
    </form>
  )
}

export default LoginForm
