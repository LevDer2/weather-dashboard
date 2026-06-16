import styles from './NewsItem.module.css';

export const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={`${styles.image} ${styles[item.variant]}`}></div>
      <h3 className={styles.title}>{item.title}</h3>
    </li>
  );
};
