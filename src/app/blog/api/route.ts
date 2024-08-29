import axios from "axios";

export async function GET() {
  try {
    const result = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts?key=${process.env.BLOG_API}`)
    return Response.json(result.data.items)
  }
  catch {
    return Response.error()
  }
}