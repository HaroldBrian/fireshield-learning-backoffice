import { blogs } from '../data'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Blog
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950">
              Latest from our blog
            </h2>
            <p className="text-base">
              In this guide, we&apos;re going to share the essential SEO ranking
              factors you need to dominate search. By the end of this post,
              you&apos;ll have a well-optimized site
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

export default Blog
