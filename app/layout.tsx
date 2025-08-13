import './globals.css';
import { winkySans } from '../lib/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sous - Your AI Sous Chef',
  description: 'Turn your pantry into possibilities. Sous is your personal AI sous-chef, turning the ingredients you have into meals you\'ll love.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={winkySans.variable}>
      <body>{children}</body>
    </html>
  );
}