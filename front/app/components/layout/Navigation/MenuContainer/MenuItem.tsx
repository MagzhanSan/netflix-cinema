import styles from './Menu.module.scss';
import { IMenuItem } from './menuContainer.interface';
import MaterialIcon from '@/components/ui/MaterialIcon';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

const MenuItem: FC<{ item: IMenuItem }> = ({ item: { icon, title, link } }) => {
  const { asPath } =
    typeof window !== 'undefined' && require('next/navigation').useRouter();
  return (
    <li
      className={cn({
        [styles.active]: asPath === link,
      })}
    >
      <Link href={link} legacyBehavior>
        <a>
          <MaterialIcon name={icon} />
          <span>{title}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
