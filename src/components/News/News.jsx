import { NewsList } from "../NewsList/NewsList";
import styles from "./News.module.css";

export const News = () => {
  return (
    <section className={styles.news}>
      <div className="container">
        <h2 className={styles.title}>
          The local news at your choosen location: Name of Location
        </h2>
        <NewsList />

        <button className={styles.button} type="button">
          See more
        </button>
      </div>
    </section>
  );
};
