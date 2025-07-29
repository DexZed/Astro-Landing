import PostCard from "./PostCard"
import { POSTS } from "@/content/posts"

const PostsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:w-[700px] lg:w-[800px] w-full justify-center items-center gap-7">
      {POSTS.map(({ title, description, tags }) => (
        <PostCard
          key={title}
          title={title}
          description={description}
          tags={tags}
          
        />
      ))}
    </div>
  )
}

export default PostsSection
