import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Class Vision',
  description: 'Class vision app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn('grainy', raleway.className)}>{children}</body>
    </html>
  );
}
