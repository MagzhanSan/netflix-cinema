import styles from './MovieList.module.scss';
import MaterialIcon from '@/components/ui/MaterialIcon';
import { IMovie } from '@/shared/types/movies.types';
import Image from 'next/image';
import { FC } from 'react';

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
  movie.genres[0] = {
    _id: '488',
    name: 'Comedy',
    slug: 'comedy',
    description: 'string',
    icon: 'MdLocalFireDepartment',
  };

  return (
    <div className={styles.movieItem}>
      <div className={styles.movieItem__image}>
        <Image
          width={60}
          height={97}
          alt={movie.title}
          src={movie.poster}
          draggable={false}
        />
      </div>
      <div className={styles.movieItem__title}>
        <h1>{movie.title}</h1>
        {movie.genres.length &&
          movie.genres.map((genre) => <p key={genre._id}>{genre.name}</p>)}
        <span>
          <MaterialIcon name="MdBookmarkBorder" /> {movie.rating}
        </span>
      </div>
    </div>
  );
};

export default MovieItem;
