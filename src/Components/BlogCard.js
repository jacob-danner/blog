import { Link } from "react-router-dom"

const BlogCard = ({title, date, slug}) => {
    return (
        <div id={slug} className="BlogCard">
            <h1>{title}</h1>
            <div className="BlogCardSub">
                <p>{date}</p>
                <Link to={`/blog/${slug}`}>read</Link>
            </div>
        </div>
    )
}

export { BlogCard }
