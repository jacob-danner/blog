import { useBlogs } from "../Hooks"
import { BlogCard } from "./BlogCard"

const Blogs = () => {
    const [blogs, isLoading] = useBlogs()

    const buildHTML = () => {
        if (isLoading) return <p>Loading...</p>

        return (
            <>

            {blogs.map(el => {
                return <BlogCard title={el.fields.title} date={el.fields.date} slug={el.fields.slug} key={el.fields.slug} />
            })}
            </>
        )
    }

    return (
        <>
            blogs
            {buildHTML()}
        </>
    )
}

export { Blogs }