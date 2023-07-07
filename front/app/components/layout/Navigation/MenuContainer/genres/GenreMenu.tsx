import Menu from '../Menu';
import { usePopularGenres } from './usePopularGenres';
import { FC } from 'react';

const GenreMenu: FC = () => {
  const { isLoading, data } = usePopularGenres();

  return isLoading ? (
    <div className="mx-11 mb-6">Loading...</div>
  ) : (
    <Menu menu={{ title: 'Popular Genres', items: data || [] }} />
  );
};

export default GenreMenu;
