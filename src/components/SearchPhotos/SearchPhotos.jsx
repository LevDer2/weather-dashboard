import styles from './SearchPhotos.module.css';

const photos = [
  { id: 1, className: 'photoOne' },
  { id: 2, className: 'photoTwo' },
  { id: 3, className: 'photoThree' },
  { id: 4, className: 'photoFour' },
  { id: 5, className: 'photoFive' },
];

export const SearchPhotos = () => {
  return (
    <section className={styles.photos}>
      <div className="container">
        <h2 className={styles.title}>Beautiful nature</h2>

        <ul className={styles.list}>
          {photos.map((photo, index) => (
            <li
              key={photo.id}
              className={`${styles.photo} ${styles[photo.className]} ${
                index === 2 ? styles.activePhoto : ''
              }`}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
};
