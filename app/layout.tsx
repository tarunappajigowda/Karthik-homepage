import './globals.css';
import React from 'react';
import Navbar from'../components/Navbar';
import Footer from '../components/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* The Navbar sits globally at the top of every route */}
        <Navbar />
        
        {/* Page specific code from your subfolders injects here */}
        <main>{children}</main>
        
        {/* The Footer sits globally at the bottom of every route */}
        <Footer />
      </body>
    </html>
  );
}