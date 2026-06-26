import styles from "./WeatherItem.module.css";
import fovorite from "./img/fovorite.svg";
import update from "./img/update.svg";
import delet from "./img/delete.svg";

import { FiHeart, FiRefreshCw } from "react-icons/fi";
import { TfiTrash } from "react-icons/tfi";

export const WeatherItem = ({
  weather,
  name,
  handleDeleteLocation,
  handleShowMore,
}) => {
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <li className={styles.card}>
      <div className={styles.locationRow}>
        <p className={styles.city}>{weather.name}</p>
        <p className={styles.country}>{weather.sys.country}</p>
      </div>

      <p className={styles.time}>14:00</p>

      <div className={styles.forecast}>
        <button type="button" className={styles.hourlyForecast}>
          Hourly forecast
        </button>

        {name && (
          <button type="button" className={styles.weeklyForecast}>
            Weekly forecast
          </button>
        )}
      </div>

      <div className={styles.exactlyTime}>
        <p className={styles.date}>13.10.2023</p>
        <p className={styles.day}>Friday</p>
      </div>

      <img src={iconUrl} alt={weather.weather[0].description} />

      <p className={styles.temperature}>{Math.round(weather.main.temp)}°C</p>

      <div className={styles.actions}>
        <button className={styles.iconButton} type="button">
          {/* <img className={styles.iconRefresh} src={update} alt="Refresh" /> */}
          <FiRefreshCw className={styles.iconRefresh} />
        </button>

        <button className={styles.favoriteButton} type="button">
          {/* <img className={styles.iconFavorite} src={fovorite} alt="Favorite" /> */}
          <FiHeart className={styles.iconFavorite} />
        </button>

        <button
          className={styles.moreButton}
          type="button"
          onClick={() => handleShowMore(weather)}
        >
          See more
        </button>

        <button
          className={styles.iconButton}
          type="button"
          onClick={() => handleDeleteLocation(weather.id)}
        >
          {/* <img className={styles.iconDelete} src={delet} alt="Delete" /> */}
          <TfiTrash className={styles.iconDelete} />
        </button>
      </div>
    </li>
  );
};
