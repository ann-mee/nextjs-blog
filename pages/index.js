import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/posts/featured-posts";

const posts = [
  {
    title: "Title 1",
    slug: "title-1",
    image: "",
    excerpt: "Excerpt",
    date: "2023-02-10",
  },
  {
    title: "Title 2",
    slug: "title-2",
    image: "",
    excerpt: "Excerpt",
    date: "2023-02-10",
  },
  {
    title: "Title 3",
    slug: "title-3",
    image: "",
    excerpt: "Excerpt",
    date: "2023-02-10",
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
}
