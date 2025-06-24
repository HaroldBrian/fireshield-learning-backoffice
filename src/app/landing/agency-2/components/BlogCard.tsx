import Link from 'next/link'
import type { BlogType } from '../types'
import { LuMoveRight } from 'react-icons/lu'
import Image from 'next/image'

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-default-200">
      <div className="flex flex-col">
        <div>
          <Image
            alt="blog-image"
            src={blog.image}
            className="h-full max-w-full"
          />
        </div>
        <div className="group p-6">
          <h3 className="mb-4 text-xl font-medium text-default-950">
            {blog.title}
          </h3>
          <p className="mb-5  mt-3 text-base">{blog.description}</p>
          <Link href="" className="text-lg font-medium text-default-950">
            Read More
            <LuMoveRight className="duration-400 inline-block  h-5 w-5 opacity-0 transition-all will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
