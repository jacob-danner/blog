import { useBlog } from "../Hooks"
import ReactMarkdown from 'react-markdown'
import { useParams } from "react-router-dom";
import { Heading } from "./Heading";

const Blog = () => {
    const { slug } = useParams() // pull parameters from url to get the slug identifier
    const [blog, isLoading] = useBlog(slug)
    
    const buildHTML = () => {
        if (isLoading) return <p className="LoadingScreen">Loading...</p>

        return (
            <div className="BlogWrapper">
                <Heading title={blog.fields.title} date={blog.fields.date} />
                <ReactMarkdown>
                    {blog.fields.markdownContent}
                </ReactMarkdown>
            </div>
        )
    }

    return (
        <>
            {buildHTML()}
        </>
    )
}

export { Blog }