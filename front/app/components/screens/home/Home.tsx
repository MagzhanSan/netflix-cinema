import { IHome } from './home.interface';
import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';

const Home: FC<IHome> = () => {
  return (
    <Meta title="Online cinema by Maga" description="Watch perfect movies :D">
      <Heading
        title="Watch movies online"
        className="text-gray-300 mb-8 text-xl"
      />
    </Meta>
  );
};

export default Home;
