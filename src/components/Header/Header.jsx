import styles from "./Header.module.css";
import headerLogo from "./img/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="./index.html">
          <img className={styles.logo} src={headerLogo} alt="Logo" />
        </a>
        <nav className={styles.nav}>
          <a className={styles.navLink} href="#hero">
            Who we are
          </a>
          <a className={styles.navLink} href="#contacts">
            Contacts
          </a>
          <a className={styles.navLink} href="#menu">
            Menu
          </a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.signUpButton} type="button">
            Sign Up
          </button>

          <button
            className={styles.profileButton}
            type="button"
            aria-label="User profile"
          >
            <span className={styles.profileIcon}></span>
          </button>
        </div>
      </div>
    </header>
  );
};
