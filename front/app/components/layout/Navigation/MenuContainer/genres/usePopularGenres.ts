import { IMenuItem } from '../menuContainer.interface';
import { getGenreUrl } from '@/config/url.config';
import { GenreService } from '@/services/genre.service';
import { useQuery } from 'react-query';

export const usePopularGenres = () => {
  const queryData = useQuery('get popular genres', async () => {
    const { data } = await GenreService.getAll();
    const menuItems: IMenuItem[] = data.map((genre: any) => ({
      icon: genre.icon,
      link: getGenreUrl(genre.slug),
      title: genre.name,
    }));

    console.log(menuItems);

    return menuItems.slice(0, 4);
  });

  return queryData;
};
