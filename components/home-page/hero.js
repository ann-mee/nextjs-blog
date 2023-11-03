import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/hero.jpg" alt="..." width={300} height={300} />
      </div>
      <h1>Hi :)</h1>
      <p>This is a blog about web development</p>
    </section>
  );
}
