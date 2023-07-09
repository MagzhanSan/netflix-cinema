import MaterialIcon from '../MaterialIcon';
import styles from './SearchField.module.scss';
import { FC } from 'react';

interface ISearchField {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
  return (
    <div className={styles.SearchField}>
      <MaterialIcon name="MdSearch" />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchField;
