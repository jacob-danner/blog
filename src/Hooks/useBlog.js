import { getBlog } from "../ContentfulUtlis";
import { useState, useEffect } from 'react'

const useBlog = (slug) => {
    const [blog, setBlog] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const items = await getBlog(slug)
            setBlog(items[0]) // 0th element is what i need
            setLoading(false)
        })()

    }, [slug])

    return [blog, isLoading]
}

export { useBlog }