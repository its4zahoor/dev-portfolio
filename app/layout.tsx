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
  title: 'Abdul Zahoor | Portfolio',
  description:
    'Senior Frontend Developer | Aspiring Fullstack Developer | React, JavaScript, Next.js, HTML/CSS Expert | Express, Node.js, MySQL, MongoDB ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          href='/app/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/app/favicon.svg' />
        <link rel='shortcut icon' href='/app/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/app/apple-touch-icon.png'
        />
        <meta name='apple-mobile-web-app-title' content='zahoor.dev' />
        <link rel='manifest' href='/app/site.webmanifest' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
