import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="page-wrapper">

      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-h1">Karthik P K - Founder of Allofficials and Fumet</h1>
          <p className="hero-desc">An emerging entrepreneur and content creator for the Kannada-speaking community. Turning ideas into ventures that serve real people.</p>
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
            <p className="about-body">I'm the founder of AllOfficials and Fumet — building brands that serve real people. As a Kannada content creator, I believe every great business starts with an authentic story.</p>
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
            <div className="vcard-img vc-ao">allofficials.in</div>
            <p className="vcard-desc">A sports-tech platform streamlining the recruitment and management of athletic officials globally — forming systems that sports rely on.</p>
            <a href="#" className="vcard-link">Visit Brand →</a>
          </div>
          <div className="vcard">
            <div className="vcard-top"><h3 className="vcard-name">Fumet</h3></div>
            <div className="vcard-img vc-fm">fumet.in</div>
            <p className="vcard-desc">Premium culinary brand focused on authentic flavours and seasonal ingredients — bridging food lovers with modern consumption habits.</p>
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

      <section className="creator">
        <div className="creator-top">
          <div>
            <div className="c-badge"><span><h2>Explore my content</h2></span></div>
          </div>
          <a href="https://instagram.com/karthikpk.kannada" target="_blank" rel="noopener noreferrer" className="btn-amber">Follow on Instagram →</a>
        </div>
        <div className="reels">
          {/* Reel 1 */}
          <a href="https://www.instagram.com/reel/DV3dNNzkVBF/?igsh=dHJlcGx4enQ4amJ4" target="_blank" rel="noopener noreferrer" className="reel-link">
            <div className="reel" style={{ backgroundImage: "url('/images/reel-thumb-1.jpg')" }}>
              <div className="reel-play">
                <div className="reel-tri"></div>
              </div>
              <span className="reel-lbl">About Hajmola</span>
            </div>
          </a>

          {/* Reel 2 */}
          <a href="https://www.instagram.com/reel/DX64tzANQ12/?igsh=MTR6YXZweXEyaHc0ZA==" target="_blank" rel="noopener noreferrer" className="reel-link">
            <div className="reel" style={{ backgroundImage: "url('/images/reel-thumb-2.jpg')" }}>
              <div className="reel-play">
                <div className="reel-tri"></div>
              </div>
              <span className="reel-lbl">Top 10 oldest Companies of India</span>
            </div>
          </a>

          {/* Reel 3 */}
          <a href="https://www.instagram.com/reel/DWeDNlWCse9/?igsh=azNqYWYzeGRkcndj" target="_blank" rel="noopener noreferrer" className="reel-link">
            <div className="reel" style={{ backgroundImage: "url('/images/reel-thumb-3.jpg')" }}>
              <div className="reel-play">
                <div className="reel-tri"></div>
              </div>
              <span className="reel-lbl">About JCB</span>
            </div>
          </a>
        </div>
      </section>

      <section className="nav-cards">
        <div className="nc-label">Explore</div>
        <div className="nc-grid">
          <a href="#" className="nc"><div className="nc-num">01</div><div className="nc-title">About Me</div><div className="nc-desc">My story, values, and the vision behind everything I build.</div><div className="nc-arr">→</div></a>
          <a href="#" className="nc"><div className="nc-num">02</div><div className="nc-title">AllOfficials</div><div className="nc-desc">Sports-tech platform revolutionising official management globally.</div><div className="nc-arr">→</div></a>
          <a href="#" className="nc"><div className="nc-num">03</div><div className="nc-title">Fumet</div><div className="nc-desc">Premium culinary brand bridging authentic flavours with modern life.</div><div className="nc-arr">→</div></a>
          <a href="#" className="nc"><div className="nc-num">04</div><div className="nc-title">Creator</div><div className="nc-desc">Kannada content, business reels and a growing community of 25K+.</div><div className="nc-arr">→</div></a>
        </div>
      </section>

    </div>
  );
}