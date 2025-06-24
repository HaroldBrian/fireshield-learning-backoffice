import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import type { BlogType } from '../types'
import Image from 'next/image'

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="rounded-md border border-default-200 p-6">
      <div className="grid items-center gap-6 sm:grid-cols-5">
        <div className="col-span-2">
          <Image
            alt="blog-image"
            src={blog.image}
            className="my-auto h-full w-full rounded-md"
          />
        </div>
        <div className="group sm:col-span-3">
          <h3 className="mb-4 mt-3 text-3xl font-medium text-default-950">
            {blog.title}
          </h3>
          <p className="mb-5  mt-3 text-base">{blog.description}</p>
          <Link href="" className="text-lg  font-medium text-default-950">
            Read More
            <LuMoveRight className="inline-block h-4 w-4 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
