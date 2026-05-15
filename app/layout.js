import Script from 'next/script';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'DataStaq AI',
  description: 'DataStaqAI',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <meta name="google-site-verification" content="219nfbryneJVsbIcko0nt1-jlPKBkmkxg6v4TJuAfAo" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JZF3B7SQ09"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JZF3B7SQ09');
          `}
        </Script>
      </head>
      <body className="font-jakarta antialiased">{children}</body>
    </html>
  );
}
