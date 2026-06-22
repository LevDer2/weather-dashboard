import styles from "./NewsItem.module.css";

export const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <a href="">
        {/* <div className={`${styles.image} ${styles[item.variant]}`}></div> */}
        <img className={styles.image} src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" alt="" />
        <h3 className={styles.title}>{item.title}</h3>
      </a>
    </li>
  );
};
