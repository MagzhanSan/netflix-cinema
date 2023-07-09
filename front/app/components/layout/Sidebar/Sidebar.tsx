import styles from './Sidebar.module.scss';
import Search from './search/Search';
import { FC } from 'react';

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
    </div>
  );
};

export default Sidebar;
