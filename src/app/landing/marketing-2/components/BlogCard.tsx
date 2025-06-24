import Image from 'next/image'
import { BlogType } from '../type'
import { LuCalendarDays, LuMessageSquare } from 'react-icons/lu'

const BlogCard = ({ blog }: { blog: BlogType }) => {
  const { date, image, title, type, description } = blog
  return (
    <div className="overflow-hidden rounded-lg border border-default-200 p-6">
      <div className="group relative overflow-hidden">
        <div className="overflow-hidden rounded-md">
          <Image
            alt="blog-image"
            src={image}
            className="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
          />
        </div>
        <div className="mt-6 flex items-center gap-5">
          <div className="group flex items-center gap-3">
            <LuCalendarDays className="h-5 w-5 text-default-300 transition-all duration-700 group-hover:text-primary " />
            <p className="text-base text-default-950">{date}</p>
          </div>
          <div className="group flex items-center gap-3">
            <LuMessageSquare className="h-5 w-5 text-default-300 transition-all duration-700 group-hover:text-primary " />
            <p className="text-base text-default-950">{type}</p>
          </div>
        </div>
        <h2 className="mt-4 text-xl font-medium text-default-950 transition-all duration-700 group-hover:underline">
          {title}
        </h2>
        <p className="mt-4 text-base">{description}</p>
      </div>
    </div>
  )
}

export default BlogCard
