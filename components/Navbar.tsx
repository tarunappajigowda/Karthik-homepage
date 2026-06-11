import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 56px' }}>
      <div className="nav-logo" style={{ fontWeight: 700, fontSize: '16px', color: '#fff' }}>
        Karthik P K
      </div>
      <div className="nav-links" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        <Link href="/about" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>About</Link>
        <Link href="/ventures" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Ventures</Link>
        <Link href="/story" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Story</Link>
        <Link href="/creator" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Creator</Link>
        <Link href="/connect" className="nav-cta">Connect ↗</Link>
      </div>
    </nav>
  );
}