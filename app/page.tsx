import React from 'react';

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-logo">Karthik P K</div>
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Ventures</a>
          <a href="#">Story</a>
          <a href="#">Creator</a>
          <a href="#" className="nav-cta">Connect ↗</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag"><span>Founder · Entrepreneur · Creator</span></div>
          <h1 className="hero-h1">Building Brands.<br />Creating Impact.<br />Telling Stories.</h1>
          <p className="hero-desc">Founder of AllOfficials & Fumet. Creating content for 22K+ Kannada-speaking community. Turning ideas into ventures that serve real people.</p>
          <div className="hero-btns">
            <a href="#" className="btn-solid">Explore My Ventures →</a>
            <a href="#" className="btn-ghost">Read My Story</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="photo-ph">Karthik Sir — Photo Here</div>
          <div className="hero-right-overlay"></div>
          <div className="hero-badges">
            <div className="hbadge">
              <div className="hbadge-icon">📱</div>
              <div className="hbadge-info">
                <span className="hbadge-num">22K+</span>
                <span className="hbadge-lbl">Instagram Community</span>
              </div>
            </div>
            <div className="hbadge">
              <div className="hbadge-icon">🏢</div>
              <div className="hbadge-info">
                <span className="hbadge-num">2 Brands</span>
                <span className="hbadge-lbl">Founded & Live</span>
              </div>
            </div>
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

      <section className="stats">
        <div className="stat"><div className="stat-bar"></div><div className="stat-n">22<sup>K+</sup></div><div className="stat-l">Instagram Community</div></div>
        <div className="stat"><div className="stat-bar"></div><div className="stat-n">2<sup>+</sup></div><div className="stat-l">Brands Founded</div></div>
        <div className="stat"><div className="stat-bar"></div><div className="stat-n">5<sup>+</sup></div><div className="stat-l">Years Building</div></div>
        <div className="stat"><div className="stat-bar"></div><div className="stat-n">₹X<sup>Cr</sup></div><div className="stat-l">Revenue Generated</div></div>
      </section>

      <section className="about">
        <div className="about-grid">
          <div className="about-left">
            <div className="about-top-left">About Me</div>
            <p className="about-body">I'm the founder of AllOfficials and Fumet — building brands that serve real people. As a Kannada content creator with 22K+ community, I believe every great business starts with an authentic story.</p>
            <a href="#" className="about-cta">More About Me →</a>
          </div>
          <div className="about-right">
            <h2 className="about-heading">I'm Your Founder, Builder & Kannada Creator for Clarity and Impact</h2>
            <div className="about-photo"><span className="about-photo-ph">Karthik Sir Photo</span></div>
          </div>
        </div>
      </section>

      <section className="ventures">
        <div className="v-header">
          <div><div className="v-tag">My Ventures</div><div className="v-title">The Brands I Built</div></div>
          <p className="v-subtitle">Two live brands. Real users. Real impact. Still growing.</p>
        </div>
        <div className="v-grid">
          <div className="vcard">
            <div className="vcard-top"><span className="vcard-name">AllOfficials</span><span className="vcard-live">● Live</span></div>
            <div className="vcard-img vc-ao">allofficials.in</div>
            <p className="vcard-desc">A sports-tech platform streamlining the recruitment and management of athletic officials globally — forming systems that sports rely on.</p>
            <div className="vcard-stat-n">300%</div>
            <div className="vcard-stat-l">Growth Rate</div>
            <a href="#" className="vcard-link">Visit Brand →</a>
          </div>
          <div className="vcard">
            <div className="vcard-top"><span className="vcard-name">Fumet</span><span className="vcard-live">● Live</span></div>
            <div className="vcard-img vc-fm">fumet.in</div>
            <p className="vcard-desc">Premium culinary brand focused on authentic flavours and seasonal ingredients — bridging food lovers with modern consumption habits.</p>
            <div className="vcard-stat-n">50K+</div>
            <div className="vcard-stat-l">Unique Reach</div>
            <a href="#" className="vcard-link">Visit Brand →</a>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="story-inner">
          <div className="story-left">
            <div className="story-tag">My Story</div>
            <div className="story-quote">"Execution is the only true currency in a world saturated with idle ideas."</div>
            <div className="story-photo"><span className="story-photo-ph">Karthik Sir Photo</span></div>
          </div>
          <div className="story-right">
            <div className="story-paras">
              <p className="story-p">My journey began at the intersection of curiosity and pragmatism. Growing up, I was always drawn to how things work — and more importantly, how they could work better.</p>
              <p className="story-p">When I saw the gap in the market, I didn't wait. I built AllOfficials from scratch — a platform that solved a real problem for real people in the sports world.</p>
              <p className="story-p">Fumet came from a different calling — a love for authentic food culture and the belief that premium shouldn't mean inaccessible. Two brands, one mission.</p>
              <p className="story-p">Today I create content for 22K+ Kannada-speaking audience because our stories deserve to be told in our own language, with our own voice.</p>
            </div>
            <a href="#" className="story-cta">Read the Full Story →</a>
          </div>
        </div>
      </section>

      <section className="creator">
        <div className="creator-top">
          <div>
            <div className="c-badge"><span>Kannada Content Creator</span></div>
            <div className="creator-title">22K+ Community<br />on Instagram</div>
          </div>
          <a href="#" className="btn-amber">Follow on Instagram →</a>
        </div>
        <div className="reels">
          <div className="reel"><div className="reel-play"><div className="reel-tri"></div></div><span className="reel-lbl">Business Tips</span></div>
          <div className="reel"><div className="reel-play"><div className="reel-tri"></div></div><span className="reel-lbl">Founder Life</span></div>
          <div className="reel"><div className="reel-play"><div className="reel-tri"></div></div><span className="reel-lbl">Kannada Stories</span></div>
        </div>
      </section>

      <section className="cta-banner">
        <h2 className="cta-h">Ready to See What I Am Building?</h2>
        <p className="cta-p">Two brands. One creator. A story still being written.</p>
        <a href="#" className="btn-solid" style={{ margin: '0 auto', display: 'inline-flex' }}>Explore My Ventures →</a>
      </section>

      <section className="nav-cards">
        <div className="nc-label">Explore</div>
        <div className="nc-grid">
          <a href="#" className="nc"><div className="nc-num">01</div><div className="nc-title">About Me</div><div className="nc-desc">My story, values, and the vision behind everything I build.</div><div className="nc-arr">→</div></a>
          <a href="#" className="nc"><div className="nc-num">02</div><div className="nc-title">AllOfficials</div><div className="nc-desc">Sports-tech platform revolutionising official management globally.</div><div className="nc-arr">→</div></a>
          <a href="#" className="nc"><div className="nc-num">03</div><div className="nc-title">Fumet</div><div className="nc-desc">Premium culinary brand bridging authentic flavours with modern life.</div><div className="nc-arr">→</div></a>
          <a href="#" className="nc"><div className="nc-num">04</div><div className="nc-title">Creator</div><div className="nc-desc">Kannada content, business reels and a growing community of 22K+.</div><div className="nc-arr">→</div></a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-brand">Karthik P K</div>
            <div className="footer-tag">Founder · Creator · Builder</div>
            <div className="footer-socials"><div className="soc">in</div><div className="soc">ig</div></div>
          </div>
          <div>
            <div className="fc-title">Pages</div>
            <div className="fc-links"><a href="#">About</a><a href="#">AllOfficials</a><a href="#">Fumet</a><a href="#">Creator</a><a href="#">Contact</a></div>
          </div>
          <div>
            <div className="fc-title">Connect</div>
            <div className="fc-links"><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#">Collaborations</a><a href="#">Press</a></div>
          </div>
        </div>
        <div className="footer-wm">KARTHIK P K</div>
        <div className="footer-bottom">
          <span className="fc">© 2025 Karthik P K. All rights reserved.</span>
          <span className="fc">karthikpk.com</span>
        </div>
      </footer>
    </>
  );
}