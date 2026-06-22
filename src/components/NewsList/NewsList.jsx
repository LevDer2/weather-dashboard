import { NewsItem } from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';

const news = [
  {
    id: 1,
    title: 'Rescue pups pose as ghosts in festive photo shoot',
    variant: 'ghost',
  },
  {
    id: 2,
    title: 'Cat interrupts morning coffee on sunny Washington morning',
    variant: 'cat',
  },
  {
    id: 3,
    title: 'New study finds dogs pay more attention to women',
    variant: 'dogs',
  },
  {
    id: 4,
    title: 'Petting dogs gives health benefit, even if they are not yours',
    variant: 'bulldog',
  },
];

export const NewsList = () => {
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
