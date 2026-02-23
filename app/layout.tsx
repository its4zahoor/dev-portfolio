import type { Metadata } from 'next';
import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Abdul Zahoor | Full Stack Expert | React & Next.js Specialist',
  description:
    'Full Stack Expert | React & Next.js Specialist | React, JavaScript, Next.js, HTML/CSS Expert | Express, Node.js, MySQL, MongoDB ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta
          name='description'
          content='Full Stack Expert Abdul Zahoor | React & Next.js Specialist | Skilled in UI revamps, performance optimization, and full-stack development.'
        />

        <meta property='og:url' content='https://zahoor.dev' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Full Stack Expert Abdul Zahoor | React & Next.js Specialist'
        />
        <meta
          property='og:description'
          content='Full Stack Expert Abdul Zahoor | React & Next.js Specialist | Skilled in UI revamps, performance optimization, and full-stack development.'
        />
        <meta property='og:image' content='https://zahoor.dev/og-image.png' />

        <meta property='twitter:url' content='https://zahoor.dev' />
        <meta
          name='twitter:title'
          content='Full Stack Expert Abdul Zahoor | React & Next.js Specialist'
        />
        <meta
          name='twitter:description'
          content='Full Stack Expert Abdul Zahoor | React & Next.js Specialist | Sjkilled in UI revamps, performance optimization, and full-stack development.'
        />
        <meta name='twitter:image' content='https://zahoor.dev/og-image.png' />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
