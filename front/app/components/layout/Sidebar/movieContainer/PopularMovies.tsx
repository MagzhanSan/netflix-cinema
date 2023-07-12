import MovieList from './MovieList';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { MovieSearchService } from '@/services/movie.search';
import { FC } from 'react';
import { useQuery } from 'react-query';

const PopularMovies: FC = () => {
  const { isLoading, data } = useQuery('get popular movies in sidebar', () =>
    MovieSearchService.getPopularMovies()
  );

  return (
    <>
      {isLoading ? (
        <SkeletonLoader count={3} />
      ) : (
        <MovieList title="Popular Movies" link="link" movies={data || []} />
      )}
    </>
  );
};

export default PopularMovies;
