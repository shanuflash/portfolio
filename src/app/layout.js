import { Geist, Geist_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Shanu Sivakumar | Portfolio',
  description:
    'Frontend Developer at SurveySparrow. Specializing in React, Next.js, and modern web development. View my projects and get in touch.',
  keywords:
    'Shanu Sivakumar, Frontend Developer, React, Next.js, JavaScript, Portfolio, SurveySparrow',
  author: 'Shanu Sivakumar',
  copyright: '© 2025 Shanu Sivakumar. All rights reserved.',
  robots: 'index, follow, noarchive, nosnippet',
  openGraph: {
    title: 'Shanu Sivakumar | Portfolio',
    description:
      'Frontend Developer at SurveySparrow. Specializing in React, Next.js, and modern web development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shanu Sivakumar | Portfolio',
    description:
      'Frontend Developer at SurveySparrow. Specializing in React, Next.js, and modern web development.',
    creator: '@shanuflash',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="author" content="Shanu Sivakumar" />
        <meta
          name="copyright"
          content="© 2025 Shanu Sivakumar. All rights reserved."
        />
        <meta name="robots" content="index, follow, noarchive, nosnippet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        {/* 
          © 2025 Shanu Sivakumar. All rights reserved.
          This website and its contents are protected by copyright law.
          Unauthorized copying, modification, or redistribution is prohibited.
          Contact: hello@shanu.dev for licensing inquiries.
        */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
