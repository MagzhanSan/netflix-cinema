import Menu from './Menu';
import GenreMenu from './genres/GenreMenu';
import { firstMenu, userMenu } from './menu.data';
import { FC } from 'react';

const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </div>
  );
};

export default MenuContainer;
