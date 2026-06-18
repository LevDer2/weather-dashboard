import styles from "./WeatherItem.module.css";
import fovorite from "./img/fovorite.svg";
import update from "./img/update.svg";
import delet from "./img/delete.svg";

export const WeatherItem = ({ weather }) => {
  const { city, country, time, date, weekday, temperature } = weather;

  return (
    <li className={styles.card}>
      <div className={styles.locationRow}>
        <p className={styles.city}>{city}</p>
        <p className={styles.country}>{country}</p>
      </div>

      <p className={styles.time}>{time}</p>

      {/* <div className={styles.dateBadge}>
        {date} | {weekday}
      </div> */}

      <div className={styles.forecast}>
        <button type="button" className={styles.hourlyForecast}>
          Hourly forecast
        </button>
        <button type="button" className={styles.weeklyForecast}>
          Weekly forecast
        </button>
      </div>

      <div className={styles.exactlyTime}>
        <p className={styles.date}>13.10.2023</p>
        <p className={styles.day}>Friday</p>
      </div>

      <div className={styles.sun} aria-label="Sunny weather icon">
        <span className={styles.sunCore}></span>
      </div>

      <p className={styles.temperature}>{temperature}</p>

      <div className={styles.actions}>
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Refresh weather"
        >
          <img className={styles.iconRefresh} src={update} alt="Refresh" />
        </button>
        <button
          className={styles.favoriteButton}
          type="button"
          aria-label="Add to favorite"
        >
          <img className={styles.iconFavorite} src={fovorite} alt="Favorite" />
        </button>
        <button className={styles.moreButton} type="button">
          See more
        </button>
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Delete city"
        >
          <img className={styles.iconDelete} src={delet} alt="Delete" />
        </button>
      </div>
    </li>
  );
};
