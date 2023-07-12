import FavoriteMovies from './FavoriteMovies/FavoriteMovies';
import styles from './MovieList.module.scss';
import PopularMovies from './PopularMovies';
import { FC } from 'react';

const MovieContainer: FC = () => {
  return (
    <div className={styles.movieContainer}>
      <PopularMovies />
      <FavoriteMovies />
    </div>
  );
};

export default MovieContainer;
