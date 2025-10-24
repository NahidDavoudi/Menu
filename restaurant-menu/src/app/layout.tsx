import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'رستوران مدرن - منوی دیجیتال',
  description: 'بهترین غذاهای ایتالیایی و بین‌المللی با کیفیت درجه یک در محیطی دنج و مدرن',
  keywords: 'رستوران، غذا، پیتزا، پاستا، برگر، منوی دیجیتال، سفارش آنلاین',
  authors: [{ name: 'رستوران مدرن' }],
  robots: 'index, follow',
  openGraph: {
    title: 'رستوران مدرن - منوی دیجیتال',
    description: 'بهترین غذاهای ایتالیایی و بین‌المللی با کیفیت درجه یک',
    type: 'website',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'رستوران مدرن - منوی دیجیتال',
    description: 'بهترین غذاهای ایتالیایی و بین‌المللی با کیفیت درجه یک',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}