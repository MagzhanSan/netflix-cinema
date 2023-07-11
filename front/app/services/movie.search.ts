import { axiosClassic } from '@/assets/api/interceptors';
import { getMoviesUrl } from '@/config/api.config';
import { IMovie } from '@/shared/types/movies.types';

export const MovieSearchService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    });
  },
};
