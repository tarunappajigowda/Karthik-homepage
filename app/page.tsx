import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import type { Metadata } from 'next'; // Optional: for TypeScript type safety
import Script from 'next/script';

// ✅ This is the correct Next.js way to add robots tags
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};



export default function Home() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DSD001EP8E"></Script>
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DSD001EP8E');
        `}
      </Script>
      <div className="page-wrapper">
        <section className="hero">
          <div className="hero-left">
            <h1 className="hero-h1">Karthik P K - Founder of Allofficials & Fumet</h1>
            <p className="hero-desc">Bootstrapped founder behind AllOfficials and Fumet - two premium apparel brands built for India, made to be great.</p>
            <div className="hero-btns">
              <a href="#" className="btn-solid">Explore My Ventures →</a>
              <a href="#" className="btn-ghost">Read My Story</a>
            </div>
          </div>
          <div className="hero-right">
            <img src="/resources/Karthik_sir_photo_for_website.jpeg" alt="Karthik P K" className="hero-photo" />
            <div className="hero-right-overlay"></div>
            <div className="hero-right-overlay-right">
            </div>
          </div>
          <div className="hero-watermark">KARTHIK P K</div>
        </section>

        <div className="ticker">
          <div className="ticker-track">
            <div className="ticker-item">AllOfficials <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">Fumet <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">Kannada Creator <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">Entrepreneur <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">Founder <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">Brand Builder <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">AllOfficials <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">Fumet <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">Kannada Creator <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">Entrepreneur <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">Founder <span className="ticker-dot">✦</span></div>
            <div className="ticker-item">Brand Builder <span className="ticker-dot">✦</span></div>
          </div>
        </div>

        <section className="about">
          <div className="about-grid">
            <div className="about-left">
              <div className="about-top-left"><p>About</p></div>
              <p className="about-body">I started my entrepreneurial journey with just ₹200 and absolutely no experience in e-commerce or the garment industry. Through constant learning, countless mistakes, and an unwillingness to quit, I turned challenges into opportunities for growth. Today, Allofficials have sold 10,000+ units across India and set trends that hundreds of competitors now follow. My mission is to build world-class products that are proudly made in India and accessible to everyone.</p>
              <a href="#" className="about-cta">More About Me →</a>
            </div>
            <div className="about-right">
              <div className="about-heading"><h2>About Karthik P K</h2></div>
              <div className="about-photo"><span className="about-photo-ph">Karthik Sir Photo</span></div>
            </div>
          </div>
        </section>

        <section className="ventures">
          <div className="v-header">
            <div><div className="v-tag">My Ventures</div><div className="v-title"><h2>Brands Founded by Karthik P K</h2></div></div>
            <p className="v-subtitle">Two live brands. Real users. Real impact. Still growing.</p>
          </div>
          <div className="v-grid">
            <div className="vcard">
              <div className="vcard-top"><h3 className="vcard-name">AllOfficials</h3></div>
              <div className="vcard-img vc-ao">
                <img src="resources/AllofficialsLogo.png" alt="AllOfficials" className="vcard-logo"/>
              </div>
              <p className="vcard-desc">Premium Indian athleisure brand built for those who pursue greatness every day. Combining performance, comfort, and timeless design, ALLOFFICIALS delivers international-quality apparel at accessible prices for athletes, creators, and ambitious individuals.</p>
              <a href="#" className="vcard-link">Visit Brand →</a>
            </div>
            <div className="vcard">
              <div className="vcard-top"><h3 className="vcard-name">Fumet</h3></div>
              <div className="vcard-img vc-fm">
                <img src="resources/FumetLogo.png" alt="Fumet" className="vcard-logo"/>
              </div>
              <p className="vcard-desc">A modern activewear and lifestyle brand created for people who move every day. FUMET offers premium-quality activewear and accessories engineered for comfort, performance, and style - bringing world-class quality to the Indian market at a fraction of international prices.</p>
              <a href="#" className="vcard-link">Visit Brand →</a>
            </div>
          </div>
        </section>

        <section className="story">
          <div className="story-inner">
            <div className="story-left">
              <div className="story-tag">My Story</div>
              <div className="story-quote"><h3>The Entrepreneurial Journey of Karthik P K</h3></div>
              <div className="story-photo"><span className="story-photo-ph">Karthik Sir Photo</span></div>
            </div>
            <div className="story-right">
              <div className="story-paras">
                <p className="story-p">My entrepreneurial journey began with a doorstep car accessories business, inspired by the hands-on experience I gained while working in the automotive industry.
                  Understanding products, installations, and customer needs gave me the confidence to build something of my own. Those early lessons shaped my approach to business—identify a problem,
                    create value, and deliver a better customer experience.
                </p>
                <p className="story-p">
                  That mindset led to the creation of ALLOFFICIALS and later FUMET, two brands built to serve different segments of the Indian apparel market with exceptional quality and design.
                As a bootstrapped founder, the biggest challenge was staying committed through years of uncertainty and limited resources. Today, my mission is to build category-leading brands from India and prove they can compete with the best in the world.
                </p>
              </div>
              <a href="#" className="story-cta">Read the Full Story →</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}