import './globals.css';
import React from 'react';
import Navbar from './components/Navbar'; // Changed from '../' to './'
import Footer from './components/Footer'; // Changed from '../' to './'

export const metadata = {
  title: 'Karthik P K | Founder of Allofficials and Fumet',
  description: 'Official website of Karthik P K, founder of Allofficials and Fumet. Explore entrepreneurship, brand building, Kannada content creation, and personal insights',
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