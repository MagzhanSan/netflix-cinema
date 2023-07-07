import Menu from './Menu';
import { firstMenu } from './menu.data';
import { FC } from 'react';

const MenuContainer: FC = () => {
  console.log(firstMenu);
  return (
    <div>
      <Menu menu={firstMenu} />
    </div>
  );
};

export default MenuContainer;
