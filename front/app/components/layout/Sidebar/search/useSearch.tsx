import { useDebounce } from '@/hooks/useDebounce';
import { MovieSearchService } from '@/services/movie.search';
import { useState } from 'react';
import { useQuery } from 'react-query';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { isSuccess, data } = useQuery(
    ['search movie list', debouncedSearch],
    async () => {
      const { data } = await MovieSearchService.getAll(debouncedSearch);
      return data;
    },
    {
      enabled: !!debouncedSearch,
    }
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return { isSuccess, data, handleSearch, searchTerm };
};

export default useSearch;
