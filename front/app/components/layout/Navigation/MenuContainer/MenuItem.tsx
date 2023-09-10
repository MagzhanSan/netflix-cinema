import styles from './Menu.module.scss';
import { IMenuItem } from './menu.interface';
import MaterialIcon from '@/components/ui/MaterialIcon';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const currentPath = usePathname();

  return (
    <li className={cn({ [styles.active]: currentPath === item.link })}>
      <Link href={item.link}>
        <MaterialIcon name={item.icon} />
        <span>{item.title}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
