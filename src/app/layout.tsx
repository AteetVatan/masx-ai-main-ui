import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://masxai.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MASX AI | Predictive Intelligence Engine',
    template: '%s | MASX AI',
  },
  description:
    'MASX AI is a predictive intelligence engine. Two pipelines (geopolitical intelligence via 35 doctrine agents, Bittensor network health via 10 anomaly detectors) producing calibrated, Brier-scored probabilistic predictions with full resolution lifecycle.',
  keywords: [
    'MASX AI',
    'strategic forecasting',
    'geopolitical intelligence',
    'Bittensor',
    'prediction calibration',
    'probabilistic forecasts',
    'AI agents',
    'subnet analytics',
    'Brier score',
    'doctrine agents',
    'anomaly detection',
    'decentralized AI',
    'forecasting engine',
  ],
  authors: [{ name: 'MASX AI' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'MASX AI',
    title: 'MASX AI | Autonomous Strategic Forecasting Engine',
    description:
      'Two autonomous forecasting pipelines. 35 doctrine agents. 50+ Bittensor subnets. Brier-scored. Self-correcting. Make tomorrow legible.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@masxai',
    title: 'MASX AI | Autonomous Strategic Forecasting Engine',
    description:
      'Dual-pipeline forecasting engine: geopolitical intelligence via 35 doctrine agents + Bittensor network health via 10 anomaly detectors. Calibrated. Brier-scored. Autonomous.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
