import PostHeader from "./post-header";
import classes from "./post-content.module.css";

export default function PostContent({ post }) {
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={post.image} />
      <div>{post.content}</div>
    </article>
  );
}
