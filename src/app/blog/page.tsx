'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import BlogPost from "./blogPost";
import style from './pageDesk.module.css';
export type BlogType = {
  kind: string,
  id: string,
  blog: {id: string},
  published: string,
  updated: string,
  url: string,
  selfLink: string,
  title: string,
  content: string,
  author: {
    id: string,
    displayName: string,
    url: string,
    image: {
      url: string
    }
  },
  replies: {
    totalItems: string,
    selfLink: string,
  },
  etag: string,
};

export default function Blog () {
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    axios.get("https://www.googleapis.com/blogger/v3/blogs/1600030983566683611/posts?key=AIzaSyD2YYebfacVG1a7BirWkeGPPwtrNvHB_Ck").then((res) => {
      setBlogPosts(res.data.items);
      // console.log(res.data.items[0].content)
    }).catch(e => console.log(e))
  } ,[])

  return (
    <div id={style.blogPage}>
      <h1>
        My Blogs
      </h1>
      {blogPosts.map((blog, i) => <BlogPost key={`blog${i}`} blog={blog} />)}
    </div>
  )
}