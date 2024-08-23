import Image from "next/image";
import { BlogType } from "./page";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import deskStyle from './blogPostDesk.module.css';

export default function BlogPost(props: {
  blog: BlogType,
}) {
  const htmlFrom = (htmlString: string) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, { USE_PROFILES: { html: true }})
    const html = parse(cleanHtmlString);
    return html;
  }
  const blog = props.blog;
  const published = new Date(blog.published);
  return (
    <div id={deskStyle.blogPost}>
      <div id={deskStyle.blogHeader}>
        <h2>
          <a href={blog.url}>
            {blog.title}
          </a>
        </h2>
        <h3>{blog.author.displayName}</h3>
        <div>
          Published: {published.getMonth()}/{published.getDate()}/{published.getFullYear()}
        </div>

      </div>
      <div >{htmlFrom(blog.content)}</div>
    </div>
  )
}