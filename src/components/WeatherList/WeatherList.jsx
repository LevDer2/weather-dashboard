import { WeatherItem } from "../WeatherItem/WeatherItem";
import styles from "./WeatherList.module.css";

export const WeatherList = ({
  locationsList,
  name,
  handleDeleteLocation,
  handleShowMore,
  handleRefreshLocation
}) => {
  return (
    <section className={styles.weatherSection}>
      <div className="container">
        <ul className={styles.list}>
          {locationsList.map((item) => (
            <WeatherItem
              key={item.id}
              weather={item}
              name={name}
              handleDeleteLocation={handleDeleteLocation}
              handleShowMore={handleShowMore}
              handleRefreshLocation={handleRefreshLocation}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
