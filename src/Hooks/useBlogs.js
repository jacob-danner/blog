import { getBlogs } from "../ContentfulUtlis";
import { useState, useEffect } from 'react'

const useBlogs = (slug) => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const items = await getBlogs()
            setBlogs(items) // get array of blog 
            setLoading(false)
        })()

    }, [slug])

    return [blogs, isLoading]
}

export { useBlogs }