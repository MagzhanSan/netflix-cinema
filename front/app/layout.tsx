'use client';

import './globals.scss';
import { BrowserRouter, Link, Routes } from 'react-router-dom';

export const metadata = {
  title: 'Online cinema by Maga | Site for watching movies',
  description: 'Watch perfect movies :D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
