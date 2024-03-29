import type { Metadata } from 'next';
import { Inter as Inter } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import NavBar from '@/components/nav-bar';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen font-sans antialiased bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-900 dark:from-sky-900 dark:to-blue-500 text-white',
          inter.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
