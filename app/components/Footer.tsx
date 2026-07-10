import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer style={{ background: '#111111', padding: '100px 12%', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '60px', paddingBottom: '56px', borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '20px', color: '#fff', marginBottom: '8px' }}>Karthik P K</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginBottom: '24px' }}>Founder · Creator · Builder</div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://instagram.com/mr.karthikpk" target="_blank" rel="noreferrer" className="soc"><FaInstagram /></a>
              <a href="https://linkedin.com/in/karthik-p-k-0a7a15249" target="_blank" rel="noreferrer" className="soc"><FaLinkedin /></a>
              <a href="https://instagram.com/karthikpk.kannada" target="_blank" rel="noreferrer" className="soc"><FaInstagram /></a>
            </div>
          </div>
          
          <div>
            <div className="fc-title">Pages</div>
            <div className="fc-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/about">About</Link>
              <Link href="/allofficials">AllOfficials</Link>
              <Link href="/fumet">Fumet</Link>
              <Link href="/creator">Creator</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          
          <div>
            <div className="fc-title">Connect</div>
            <div className="fc-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="https://instagram.com/karthikpk.kannada" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://linkedin.com/in/karthik-p-k-0a7a1524" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://instagram.com/mr.karthikpk" target="_blank" rel="noreferrer">Instagram</a>
              <Link href="/collaborations">Collaborations</Link>
              <Link href="/press">Press</Link>
            </div>
          </div>
        </div>

        <div className="footer-wm" style={{ fontWeight: 700, fontSize: 'clamp(48px,12vw,150px)', color: 'rgba(255,255,255,0.03)', letterSpacing: '-3px', lineHeight: '0.85', whiteSpace: 'nowrap', pointerEvents: 'none' }}>
          KARTHIK P K
        </div>
        
        <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.09)' }}>
          <span className="fc" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>© 2026 Karthik P K. All rights reserved.</span>
          <span className="fc" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>karthikpk.com</span>
        </div>
      </footer>
    </>
  );
}