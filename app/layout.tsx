import './globals.css';
import React from 'react';
import Navbar from './components/Navbar'; // Changed from '../' to './'
import Footer from './components/Footer'; // Changed from '../' to './'

export const metadata = {
  title: 'Karthik P K | Founder, Entrepreneur & Kannada Creator',
  description: 'Official homepage of Karthik P K.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}