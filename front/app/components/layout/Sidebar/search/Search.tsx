import styles from './Search.module.scss';
import SearchList from './searchList/SearchList';
import useSearch from './useSearch';
import SearchField from '@/components/ui/search-field/SearchField';
import { FC } from 'react';

const Search: FC = () => {
  const { isSuccess, data, handleSearch, searchTerm } = useSearch();

  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {isSuccess && <SearchList movies={data || []} />}
    </div>
  );
};

export default Search;
