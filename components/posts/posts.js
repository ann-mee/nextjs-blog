import classes from "./posts.module.css";
import PostGrid from "./posts-grid";

export default function Posts({ posts }) {
  return (
    <section className={classes.latest}>
      <PostGrid posts={posts} />
    </section>
  );
}
