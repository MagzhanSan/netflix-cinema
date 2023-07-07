import Link from 'next/link';
import { FC } from 'react';

const Logo: FC = () => {
  return (
    <Link href="/" legacyBehavior>
      <a className="navigation__logo text-gray-300 font-extrabold text-xl px-layout mb-8">
        NETFLIX.MAGA
      </a>
    </Link>
  );
};

export default Logo;
