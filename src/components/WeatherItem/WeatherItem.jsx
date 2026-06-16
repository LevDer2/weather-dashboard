import styles from './WeatherItem.module.css';

export const WeatherItem = ({ weather }) => {
  const { city, country, time, date, weekday, temperature } = weather;

  return (
    <li className={styles.card}>
      <div className={styles.locationRow}>
        <p className={styles.city}>{city}</p>
        <p className={styles.country}>{country}</p>
      </div>

      <p className={styles.time}>{time}</p>

      <div className={styles.dateBadge}>
        {date} | {weekday}
      </div>

      <div className={styles.sun} aria-label="Sunny weather icon">
        <span className={styles.sunCore}></span>
      </div>

      <p className={styles.temperature}>{temperature}</p>

      <div className={styles.actions}>
        <button className={styles.iconButton} type="button" aria-label="Refresh weather">
          ↻
        </button>
        <button className={styles.favoriteButton} type="button" aria-label="Add to favorite">
          ♡
        </button>
        <button className={styles.moreButton} type="button">
          See more
        </button>
        <button className={styles.iconButton} type="button" aria-label="Delete city">
          🗑
        </button>
      </div>
    </li>
  );
};
