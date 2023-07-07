'use client';

import Home from './components/screens/home/Home';
import { MainProvider } from 'providers/MainProvider';

export default function page() {
  return (
    <MainProvider>
      <Home />
    </MainProvider>
  );
}
