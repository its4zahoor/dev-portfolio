import type { Metadata } from 'next';
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
      <head>
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
          content="Senior Frontend Engineer skilled in UI revamps, performance optimization, and full-stack development. Check out Abdul Zahoor's professional journey and resume."
        />

        <meta property='og:url' content='https://zahoor.dev' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Full Stack Expert Abdul Zahoor | React & Next.js Specialist'
        />
        <meta
          property='og:description'
          content="Senior Frontend Engineer skilled in UI revamps, performance optimization, and full-stack development. Check out Abdul Zahoor's professional journey and resume."
        />
        <meta
          property='og:image'
          content='https://og-image-generator-prod.s3.amazonaws.com/ai/generated/5255e710-10c1-11f1-9a49-7fbfae8c29a1/d87e4e2d-4766-4a15-a1b2-18adfb95fb88.png'
        />

        <meta property='twitter:url' content='https://zahoor.dev' />
        <meta
          name='twitter:title'
          content='Full Stack Expert Abdul Zahoor | React & Next.js Specialist'
        />
        <meta
          name='twitter:description'
          content="Senior Frontend Engineer skilled in UI revamps, performance optimization, and full-stack development. Check out Abdul Zahoor's professional journey and resume."
        />
        <meta
          name='twitter:image'
          content='https://og-image-generator-prod.s3.amazonaws.com/ai/generated/5255e710-10c1-11f1-9a49-7fbfae8c29a1/d87e4e2d-4766-4a15-a1b2-18adfb95fb88.png'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
