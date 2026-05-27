import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { archivo, chivoMono } from '@/lib/fonts';
import '@/app/globals.css';
import { siteConfig } from '@/constants/site';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${chivoMono.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
