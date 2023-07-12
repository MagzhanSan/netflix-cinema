import styles from './Sidebar.module.scss';
import MovieContainer from './movieContainer/MovieContainer';
import Search from './search/Search';
import { FC } from 'react';

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
      <MovieContainer />
    </div>
  );
};

export default Sidebar;
