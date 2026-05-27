import { Archivo, Chivo_Mono } from 'next/font/google';

export const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const chivoMono = Chivo_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
