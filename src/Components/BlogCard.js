import { Link } from "react-router-dom"

const BlogCard = ({title, date, slug}) => {
    console.log(slug)
    return (
        <>
            <div id={slug}>
                <h1>{title}</h1>
                <h3>{date}</h3>
                <Link to={`/blog/${slug}`}>read</Link>
            </div>
        </>
    )
}

export { BlogCard }
