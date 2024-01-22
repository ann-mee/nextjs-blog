import Image from "next/image";
import clasess from "./post-header.module.css";

export default function PostHeader({ title }) {
  return (
    <header className={clasess.header}>
      <h1>{title}</h1>
      <Image src="/images/post.jpg" alt={title} width={200} height={200} />
    </header>
  );
}
