import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shanu Sivakumar | Portfolio",
  description: "Frontend Developer at SurveySparrow. Specializing in React, Next.js, and modern web development. View my projects and get in touch.",
  keywords: "Shanu Sivakumar, Frontend Developer, React, Next.js, JavaScript, Portfolio, SurveySparrow",
  author: "Shanu Sivakumar",
  copyright: "© 2025 Shanu Sivakumar. All rights reserved.",
  robots: "index, follow, noarchive, nosnippet",
  openGraph: {
    title: "Shanu Sivakumar | Portfolio",
    description: "Frontend Developer at SurveySparrow. Specializing in React, Next.js, and modern web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanu Sivakumar | Portfolio",
    description: "Frontend Developer at SurveySparrow. Specializing in React, Next.js, and modern web development.",
    creator: "@shanuflash",
  },
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Shanu Sivakumar" />
        <meta name="copyright" content="© 2025 Shanu Sivakumar. All rights reserved." />
        <meta name="robots" content="index, follow, noarchive, nosnippet" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
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
      </body>
    </html>
  );
}
