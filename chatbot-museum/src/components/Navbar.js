// Navbar.js
// import styles from "@/app.module.css";
import styles from "@/components/cmp.module.css"
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Museum Booking</div>
      <div className={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#login">Login</a>
        <a href="#signUp">SignUp</a>

        <a href="#History">History</a>

      </div>
    </nav>
  );
}
