import Link from 'next/link'
import type { BlogType } from '../types'
import Image from 'next/image'

const BlogCard = ({ blog }: { blog: BlogType }) => {
  const { description, image, time, title, type } = blog
  return (
    <div className="overflow-hidden border border-default-200">
      <Link href="" className="group relative overflow-hidden">
        <div className="overflow-hidden">
          <Image
            alt="blog-image"
            src={image}
            className="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
          />
        </div>
        <div className="p-6">
          <p className="text-lg text-primary">
            {type}
            <span className="ms-4 text-sm font-medium text-default-950">
              {time} Read
            </span>
          </p>
          <h3 className="mt-1 text-2xl/snug font-medium text-default-950">
            {title}
          </h3>
          <p className="mt-4 text-sm">{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
