import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Karthik P K | Founder, Entrepreneur & Kannada Creator',
  description: 'Official homepage of Karthik P K. Founder of AllOfficials & Fumet. Creating content and building brands for the Kannada-speaking community.',
  keywords: ['Karthik P K', 'AllOfficials', 'Fumet', 'Kannada Creator', 'Entrepreneur', 'Brand Builder'],
  openGraph: {
    title: 'Karthik P K | Founder, Entrepreneur & Kannada Creator',
    description: 'Founder of AllOfficials & Fumet. Turning ideas into ventures that serve real people.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}