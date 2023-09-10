import Menu from './Menu';
import { firstMenu, userMenu } from './menu.data';
import { FC } from 'react';

const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      {/* <Menu Genres from backend /> */}
      <Menu menu={userMenu} />
    </div>
  );
};

export default MenuContainer;
