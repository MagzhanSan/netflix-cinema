import { axiosClassic } from '@/assets/api/interceptors';
import { getGenresUrl } from '@/config/api.config';
import { IGenre } from '@/shared/types/movies.types';

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    });
  },
};
