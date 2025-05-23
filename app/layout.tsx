import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { info_data, baseUrl } from 'data/info';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${info_data.name} | Software Engineer`,
    template: '%s | Pradeep Suthar',
  },
  description: info_data.description,
  openGraph: {
    title: info_data.name,
    description: `Software Engineering @smallcase | Tech Enthusiast`,
    url: baseUrl,
    siteName: info_data.siteName,
    locale: info_data.locale,
    type: 'website',
    images: [
      {
        url: info_data.opengraph.url,
        width: 1200,
        height: 630,
        alt: `${info_data.siteName} Portfolio Open Graph Image`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pradeep Suthar',
    description: info_data.shortDescription,
    images: [info_data.opengraph.url],
    creator: info_data.social.x.username,
    site: info_data.social.x.username,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
