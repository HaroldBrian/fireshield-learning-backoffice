import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import { BlogType } from '../types'
import Image from 'next/image'

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="overflow-hidden rounded-md border border-default-200">
      <div className="group">
        <Image alt="blog-image" src={blog.image} />
        <div className="p-6">
          <h2 className="mb-5 text-lg font-medium text-default-950">
            {blog.title}
          </h2>
          <Link href="" className="text-lg font-medium text-default-900">
            Read More
            <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
