import styles from "./Header.module.css";
import headerLogo from "./img/logo.svg";
import userLogo from "./img/userLogo.svg";

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
        <div className={styles.profile}>
          <button className={styles.signUpButton} type="button">
            Sign Up
          </button>
            <img className={styles.profileIcon} src={userLogo} alt="User" />
        </div>
      </div>
    </header>
  );
};
