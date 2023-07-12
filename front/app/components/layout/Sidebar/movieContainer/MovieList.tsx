import MovieItem from './MovieItem';
import { IMovieList } from './MovieList.interface';
import styles from './MovieList.module.scss';
import Link from 'next/link';
import { FC } from 'react';

const MovieList: FC<IMovieList> = ({ link, movies, title }) => {
  return (
    <div className={styles.movieList}>
      <h1 className={styles.movieList__title}>{title}</h1>
      {movies.map((movie) => (
        <Link href={movie.videoUrl} key={movie._id}>
          <MovieItem movie={movie} />
        </Link>
      ))}
      <div className={styles.seeMore}>
        <Link href={link}>See more</Link>
      </div>
    </div>
  );
};

export default MovieList;
