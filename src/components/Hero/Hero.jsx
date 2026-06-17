import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <h1 className={styles.title}>Weather dashboard</h1>

        <div className={styles.infoWrapper}>
          <p className={styles.description}>
            Create your personal list of favorite cities and always be aware of the weather.
          </p>

          <div className={styles.dateBox}>
            <p className={styles.month}>October 2023</p>
            <p className={styles.day}>Friday, 13th</p>
          </div>
        </div>

        <form className={styles.searchForm}>
          <input
            className={styles.searchInput}
            type="text"
            name="search"
            placeholder="Search location..."
          />
          <button className={styles.searchButton} type="submit">
            <span className={styles.searchIcon}></span>
          </button>
        </form>
      </div>
    </section>
  );
};
