import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <a href="/" className={styles.logo} aria-label="24/7 forecast home">
          <span className={styles.logoMain}>24/7</span>
          <span className={styles.logoSub}>forecast</span>
        </a>

        <address className={styles.address}>
          <span className={styles.addressTitle}>Address</span>
          <span>Svobody str. 35</span>
          <span>Kyiv</span>
          <span>Ukraine</span>
        </address>

        <div className={styles.contacts}>
          <p className={styles.contactsTitle}>Contact us</p>

          <ul className={styles.socialList}>
            <li>
              <a className={`${styles.socialLink} ${styles.instagram}`} href="/" aria-label="Instagram">
                I
              </a>
            </li>
            <li>
              <a className={`${styles.socialLink} ${styles.facebook}`} href="/" aria-label="Facebook">
                f
              </a>
            </li>
            <li>
              <a className={`${styles.socialLink} ${styles.whatsapp}`} href="/" aria-label="WhatsApp">
                w
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
