import { blogs } from '../data'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Blog
            </span>
            <h2 className="mt-4 text-4xl font-medium capitalize text-default-950">
              Tools for Advancement
            </h2>
            <p className="mt-4 text-base">
              Proin viverra, ligula sit amet ultrices semper, ligula arcu
              tristique sapien, a accumsan nisi mauris ac eros.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, idx) => (
            <BlogCard blog={blog} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
