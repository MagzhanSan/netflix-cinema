import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import AuthItems from './auth/AuthItems';
import { IMenu } from './menu.interface';
import { FC } from 'react';

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
  return (
    <div>
      <div className={styles.heading}>Genres</div>
      <ul className={styles.list}>
        {items.map((item) => (
          <MenuItem key={item.link} item={item} />
        ))}
        {title === 'General' ? <AuthItems /> : null}
      </ul>
    </div>
  );
};

export default Menu;
