import Posts from "@/components/posts/posts";
import { getAllPosts } from "@/helpers/api-posts";

export default function AllPostPage({ posts }) {
  return (
    <>
      <div className="container">
        <h2>All Posts</h2>
      </div>
      <Posts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: { posts: posts },
    revalidate: 60,
  };
}
