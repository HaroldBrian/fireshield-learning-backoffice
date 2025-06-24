import portfolio3 from '@/assets/images/landing/portfolio/img-3.jpg'
import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import { blogs } from '../data'
import BlogCard from './BlogCard'
import Image from 'next/image'

const Blogs = () => {
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Blog
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950 md:text-4xl">
              Read the latest news.
            </h2>
          </div>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-xl border border-primary/20 bg-primary/10 p-6">
            <div className="relative h-full w-full">
              <Image
                alt="portfolio3"
                src={portfolio3}
                className="h-full w-full rounded-md"
              />
              <div className="absolute inset-x-0 bottom-0 top-auto hidden md:block">
                <div className="m-2 rounded-xl bg-black/10 p-2 backdrop-blur-md">
                  <div className="group text-center">
                    <h3 className="my-3 font-medium text-white md:text-3xl">
                      Free advertising you online business.
                    </h3>
                    <Link href="" className="text-lg font-medium text-white">
                      Read More
                      <LuMoveRight className="inline-block h-5 w-5 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {blogs.map((blog, idx) => (
              <BlogCard blog={blog} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs
