import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

export default function PostGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </ul>
  );
}
