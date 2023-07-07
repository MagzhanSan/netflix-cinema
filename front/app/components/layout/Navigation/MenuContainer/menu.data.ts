import { IMenu } from './menuContainer.interface';

export const firstMenu: IMenu = {
  title: 'Home',
  items: [
    {
      title: 'Home',
      link: '/',
      icon: 'MdHome',
    },
    {
      title: 'Discovery',
      link: '/genres',
      icon: 'MdExplore',
    },
    {
      title: 'Fresh Movies',
      link: '/fresh',
      icon: 'MdRefresh',
    },
    {
      title: 'Trending now',
      link: '/trending',
      icon: 'MdLocalFireDepartment',
    },
  ],
};

export const userMenu: IMenu = {
  title: 'General',
  items: [],
};
