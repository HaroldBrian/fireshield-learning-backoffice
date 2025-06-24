import Link from 'next/link'
import { blogs } from '../data'
import BlogCard from './BlogCard'

const UpdatedBlogs = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-4xl font-medium text-default-950">
                Our Latest Updates
              </h2>
              <p className="text-base">
                Stay informed about the most recent developments in the realm of
                animal photography.
              </p>
            </div>
          </div>
          <div>
            <Link
              href=""
              className="inline-flex items-center justify-center gap-2 border border-default-200 bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-700"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpdatedBlogs
