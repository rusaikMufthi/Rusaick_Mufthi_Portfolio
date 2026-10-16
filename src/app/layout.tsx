import type { Metadata, Viewport } from 'next';
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/lib/scroll';
import { PROFILE } from '@/lib/data';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rusaickmufthi.com'),
  title: `${PROFILE.name} — Aspiring Cyber Security Analyst & Network Security`,
  description: PROFILE.summary,
  keywords: [
    'Mohamed Rusaick Mufthi',
    'Rusaick Mufthi',
    'Cyber Security',
    'Network Security',
    'Software Engineering',
    'Computer Networks',
    'XSS Detection',
    'Machine Learning Security',
    'Python',
    'Sri Lanka',
  ],
  authors: [{ name: PROFILE.name }],
  openGraph: {
    title: `${PROFILE.name} — Cyber Security & Network Security Portfolio`,
    description: PROFILE.summary,
    url: 'https://rusaickmufthi.com',
    siteName: PROFILE.name,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} — Cyber Security Portfolio`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#f4f2ee',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased selection:bg-[#0d0d0d] selection:text-[#f4f2ee]"
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
