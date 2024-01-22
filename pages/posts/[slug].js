import Head from "next/head";
import PostContent from "@/components/posts/post-content";
import { getAllPosts, getPostBySlug } from "@/helpers/api-posts";

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths: paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const post = await getPostBySlug(context.params.slug);
  return {
    props: { post: post },
    revalidate: 1800,
  };
}
