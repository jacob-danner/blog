const contentful = require("contentful");

const client = contentful.createClient({
  space: "h0y78uotgtrt",
  accessToken: "RhU3BzsC6N7EeahtH2Uyh7gClfH_6hJiG_5Dfiyg5CA"
});

const getBlogs = async () => {
    const response = await client.getEntries()
    return response.items
}

const getBlog = async (slug) => {
    const response = await client.getEntries({'fields.slug': slug, content_type: 'blogPost'})
    return response.items
}

export { getBlogs, getBlog }