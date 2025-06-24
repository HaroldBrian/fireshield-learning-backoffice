import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative border-t border-default-200">
      <div className="container relative">
        <p className="py-6 text-center font-medium text-default-900">
          {new Date().getFullYear()} © AeroPage. Crafted and Coded with&nbsp;
          <span className="text-red-500">❤️</span> by&nbsp;
          <Link
            className="text-primary-700"
            href="https://coderthemes.com/"
            target="_blank"
          >
            Coderthemes
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
