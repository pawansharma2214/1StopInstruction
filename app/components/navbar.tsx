import Link from "next/link";
import styles from "./Navbar.module.css"

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navLink}>Home</Link> |{" "}
      <Link href="/about" className={styles.navLink}>About</Link> |{" "}
      <Link href="/products" className={styles.navLink}>Products</Link>
    </nav>
  );
};

export default Navbar;