import classes from "./posts-grid.module.css";
import Post from "./post";

export default function PostGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </ul>
  );
}
