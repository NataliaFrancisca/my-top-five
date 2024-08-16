import './globals.css';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import Provider from './components/Provider/Provider';

const worksans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MY TOP 5',
  description: 'discover your top five songs'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-c_white">
      <Provider>
        <body className={worksans.className}>{children}</body>
      </Provider>
    </html>
  );
}
