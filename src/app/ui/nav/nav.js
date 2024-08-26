import Link from "next/link";
import styles from "./nav.module.css";
import ThemeToggle from "../themetoggle/ThemeToggle";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.navitemscontainer}>
        <div className={styles.placeholder}></div>
        <div className={styles.home}>
          <Link href="/">
            <h1>week 8 blog</h1>
          </Link>
        </div>
        <div className={styles.links}>
          {/* <ThemeToggle /> */}
          <Link href="/ui/posts">
            <h3>posts</h3>
          </Link>

          <Link href="/ui/about">
            <h3>about</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}
