import { useBlog } from "../Hooks"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useParams } from "react-router-dom";

const Blog = () => {
    const { slug } = useParams() // pull parameters from url to get the slug identifier
    const [blog, isLoading] = useBlog(slug)
    
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
            {buildHTML()}
        </>
    )
}

export { Blog }