import { onlyText } from '../string/clearText';
import { ISeo } from './meta.interface';
import { siteName, titleMerge } from '@/config/meta.config';
import Head from 'next/head';
import { FC } from 'react';

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
  const { asPath } =
    typeof window !== 'undefined' && require('next/navigation').useRouter();
  const currentUrl = `http://localhost:3000${asPath}`;

  return (
    <>
      <Head>
        <title itemProp="headline">{titleMerge(title)}</title>
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={onlyText(description, 152)}
            />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content={titleMerge(title)} />
            <meta property="og:site_name" content={siteName} />
            <meta
              property="og:description"
              content={onlyText(description, 197)}
            />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
