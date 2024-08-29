'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import BlogPost from "./blogPost";
import style from './pageDesk.module.css';
import { CircularProgress } from "@mui/material";
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
    fetch("/blog/api")
    .then(res => res.json())
    .then(data => setBlogPosts(data))
    .catch(e => console.log(e))
  } ,[])

  return (
    <div id={style.blogPage}>
      <h1>
        My Blogs
      </h1>
      {blogPosts.length ?
      blogPosts.map((blog, i) => <BlogPost
      key={`blog${i}`} blog={blog}
      />)
        :
        <CircularProgress color="success" />
    }
    </div>
  )
}