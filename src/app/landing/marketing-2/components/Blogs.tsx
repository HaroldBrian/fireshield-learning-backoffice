import { blogs } from '../data'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Our Bolg
          </span>
          <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
            Explore Our Blog
          </h2>
          <p className="mt-5 text-lg">
            Discover top-notch marketing resources and stay updated with the
            latest news about our company.
          </p>
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
