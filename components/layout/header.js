import Link from "next/link";
import Logo from "./logo";
import Nav from "./nav";

import classes from "./header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <Nav />
    </header>
  );
}
