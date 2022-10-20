import { useBlog } from "../Hooks"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Blog = ({slug}) => {
    const [blog, isLoading] = useBlog(slug)

    console.log(blog, isLoading)
    
    const buildHTML = () => {
        if (isLoading) return <p>Loading...</p>

        const body = documentToReactComponents(blog.fields.textContent)
        return (
            <>
                <h1 id="title">{blog.fields.title}</h1><br />
                <h3 id="date">{blog.fields.date}</h3>
                {body}

            </>
        )
    }

    return (
        <>
            <h1>this is a blog post!</h1>
            {buildHTML()}
        </>
    )
}

export { Blog }