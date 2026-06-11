'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '28px 56px'
      }}>
        {/* LOGO */}
        <div className="nav-logo" style={{ fontWeight: 700, fontSize: '16px', color: '#fff' }}>
          Karthik P K
        </div>

        {/* HAMBURGER BUTTON (Visible only on mobile via global CSS or inline media query logic) */}
        <button 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none', // Overridden by CSS below on smaller screens
            flexDirection: 'column',
            gap: '6px',
            zIndex: 110,
            padding: '8px'
          }}
          className="mobile-menu-btn"
        >
          <span style={{ width: '24px', height: '2px', background: '#fff', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
          <span style={{ width: '24px', height: '2px', background: '#fff', transition: '0.3s', opacity: isOpen ? 0 : 1 }}></span>
          <span style={{ width: '24px', height: '2px', background: '#fff', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none' }}></span>
        </button>

        {/* LINKS CONTAINER */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '28px', 
            alignItems: 'center',
            transition: 'transform 0.3s ease-in-out'
          }}
          className={`nav-links-container ${isOpen ? 'menu-open' : ''}`}
        >
          <Link href="/about" onClick={() => setIsOpen(false)} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>About</Link>
          <Link href="/ventures" onClick={() => setIsOpen(false)} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Ventures</Link>
          <Link href="/story" onClick={() => setIsOpen(false)} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Story</Link>
          <Link href="/creator" onClick={() => setIsOpen(false)} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Creator</Link>
          <Link href="/connect" onClick={() => setIsOpen(false)} className="nav-cta">Connect ↗</Link>
        </div>
      </nav>

      {/* INLINE MEDIA QUERIES FOR MOBILE HANDLING */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex !important;
          }

          .nav-links-container {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 280px;
            background: #111111;
            border-left: 1px solid rgba(255,255,255,0.09);
            flex-direction: column;
            justify-content: center;
            gap: 32px !important;
            padding: 40px;
            z-index: 105;
            transform: translateX(100%);
          }

          .nav-links-container.menu-open {
            transform: translateX(0);
          }

          .nav-links-container a {
            font-size: 18px !important;
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}