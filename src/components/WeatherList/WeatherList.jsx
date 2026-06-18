import { WeatherItem } from '../WeatherItem/WeatherItem';
import styles from './WeatherList.module.css';

const weatherItems = [
  {
    id: 1,
    city: 'Prague',
    country: 'Czech Republic',
    time: '14:00',
    date: '13.10.2023',
    weekday: 'Friday',
    temperature: '22°C',
  },
  {
    id: 2,
    city: 'Prague',
    country: 'Czech Republic',
    time: '14:00',
    date: '13.10.2023',
    weekday: 'Friday',
    temperature: '22°C',
  },
  {
    id: 3,
    city: 'Prague',
    country: 'Czech Republic',
    time: '14:00',
    date: '13.10.2023',
    weekday: 'Friday',
    temperature: '22°C',
  },
  {
    id: 3,
    city: 'Prague',
    country: 'Czech Republic',
    time: '14:00',
    date: '13.10.2023',
    weekday: 'Friday',
    temperature: '22°C',
  },
  {
    id: 3,
    city: 'Prague',
    country: 'Czech Republic',
    time: '14:00',
    date: '13.10.2023',
    weekday: 'Friday',
    temperature: '22°C',
  },
  {
    id: 3,
    city: 'Prague',
    country: 'Czech Republic',
    time: '14:00',
    date: '13.10.2023',
    weekday: 'Friday',
    temperature: '22°C',
  },
  
];

export const WeatherList = () => {
  return (
    <section className={styles.weatherSection}>
      <div className="container">
        <ul className={styles.list}>
          {weatherItems.map((item) => (
            <WeatherItem key={item.id} weather={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
