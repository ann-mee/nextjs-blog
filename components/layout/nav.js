import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import classes from "./nav.module.css";

export default function Nav() {
  const { data: session } = useSession();

  function logoutHandler() {
    signOut();
  }
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        {!session && (
          <li>
            <Link href="/auth">Login</Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        )}
        {session && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
