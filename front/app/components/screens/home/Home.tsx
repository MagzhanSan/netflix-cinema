import { IHome } from './home.interface';
import Layout from '@/components/layout/Layout';
import { FC } from 'react';

const Home: FC<IHome> = () => {
  return (
    <div>
      <Layout>Naruto</Layout>
    </div>
  );
};

export default Home;
