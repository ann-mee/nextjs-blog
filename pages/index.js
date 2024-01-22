import Head from "next/head";
import Hero from "@/components/home-page/hero";
import Posts from "@/components/posts/posts";
import { getFeaturedPosts } from "@/helpers/api-posts";

export default function HomePage({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Hero />
      <div className="container">
        <h2>Featured Posts</h2>
      </div>
      <Posts posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getFeaturedPosts();

  return {
    props: { posts: posts },
    revalidate: 1800,
  };
}
