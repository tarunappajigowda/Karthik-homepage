'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Freeze background scrolling completely when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1050, /* Higher than the backdrop */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '28px 56px'
      }}>
        
        <Link href="/" style={{ fontWeight: 700, fontSize: '16px', color: '#fff', textDecoration: 'none', zIndex: 1100 }}>
          Karthik P K
        </Link>

        {/* Minimal Hamburger Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 1100,
            padding: '8px'
          }}
          className="mobile-toggle"
          aria-label="Toggle Menu"
        >
          <span style={{ width: '22px', height: '2px', background: '#fff', transition: '0.2s', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
          <span style={{ width: '22px', height: '2px', background: '#fff', transition: '0.2s', opacity: isOpen ? 0 : 1 }}></span>
          <span style={{ width: '22px', height: '2px', background: '#fff', transition: '0.2s', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
        </button>

        {/* Links Menu Container */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/ventures" onClick={() => setIsOpen(false)}>Ventures</Link>
          <Link href="/story" onClick={() => setIsOpen(false)}>Story</Link>
          <Link href="/creator" onClick={() => setIsOpen(false)}>Creator</Link>
          <Link href="/connect" onClick={() => setIsOpen(false)} className="cta-btn">Connect ↗</Link>
        </div>
      </nav>

      {/* Background Overlay Dimmer - Handles click-away safely */}
      {isOpen && <div className="menu-backdrop" onClick={() => setIsOpen(false)} />}

      <style jsx global>{`
        .nav-menu {
          display: flex;
          gap: 28px;
          align-items: center;
        }
        .nav-menu a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .nav-menu a:hover {
          color: #fff;
        }
        .cta-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff !important;
          padding: 9px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
        }

        /* Mobile specific layouts */
        @media (max-width: 768px) {
          .mobile-toggle {
            display: flex !important;
          }
          
          .nav-menu {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 50vw;
            min-width: 280px;
            height: 100vh;
            background: #111111;
            border-left: 1px solid rgba(255, 255, 255, 0.08);
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 32px;
            padding: 60px 40px;
            z-index: 1090; /* HIGHER than backdrop */
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform;
          }

          .nav-menu.active {
            transform: translateX(0);
          }

          .nav-menu a {
            font-size: 18px;
            font-weight: 600;
            width: 100%;
            display: block;
          }

          /* Elegant dimming background layer */
          .menu-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            z-index: 1000; /* LOWER than navigation layout */
            animation: fadeIn 0.3s ease forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        }
      `}</style>
    </>
  );
}