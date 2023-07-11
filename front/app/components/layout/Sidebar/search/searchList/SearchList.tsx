import styles from './SearchList.module.scss';
import { getMovieUrl } from '@/config/url.config';
import { IMovie } from '@/shared/types/movies.types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => {
          return (
            <Link key={movie._id} href={getMovieUrl(movie.slug)} legacyBehavior>
              <a>
                <Image
                  src={movie.poster}
                  width={50}
                  height={50}
                  alt={movie.title}
                  objectFit="cover"
                  objectPosition="top"
                  draggable={false}
                />
                <span>{movie.title}</span>
              </a>
            </Link>
          );
        })
      ) : (
        <div className={styles.noData}>No results</div>
      )}
    </div>
  );
};

export default SearchList;
