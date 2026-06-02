import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="page-wrapper">
      <nav>
        <div className="nav-logo">Karthik P K</div>
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Ventures</a>
          <a href="#">Art Gallery</a>
          <a href="#">Creator</a>
          <a href="#" className="nav-cta">Connect ↗</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-h1">Karthik P K - Founder of Allofficials and Fumet</h1>
          <p className="hero-desc">Founder of AllOfficials & Fumet. Creating content for Kannada-speaking community. Turning ideas into ventures that serve real people.</p>
          <div className="hero-btns">
            <a href="#" className="btn-solid">Explore My Ventures →</a>
            <a href="#" className="btn-ghost">Read My Story</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="photo-ph">Karthik Sir — Photo Here</div>
          <div className="hero-right-overlay"></div>
          <div className="hero-badges">
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
            <div className="about-top-left"><h2>About Karthik P K</h2></div>
            <p className="about-body">I'm the founder of AllOfficials and Fumet — building brands that serve real people. As a Kannada content creator, I believe every great business starts with an authentic story.</p>
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
              <p className="story-p">My journey began at the intersection of curiosity and pragmatism. Growing up, I was always drawn to how things work — and more importantly, how they could work better.</p>
              <p className="story-p">When I saw the gap in the market, I didn't wait. I built AllOfficials from scratch — a platform that solved a real problem for real people in the sports world.</p>
              <p className="story-p">Fumet came from a different calling — a love for authentic food culture and the belief that premium shouldn't mean inaccessible. Two brands, one mission.</p>
              <p className="story-p">Today I create content for 25K+ Kannada-speaking audience because our stories deserve to be told in our own language, with our own voice.</p>
            </div>
            <a href="#" className="story-cta">Read the Full Story →</a>
          </div>
        </div>
      </section>

      <section className="creator">
        <div className="creator-top">
          <div>
            <div className="c-badge"><span><h2>Featured Kannada Business Content by Karthik P K</h2></span></div>
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

      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-brand">Karthik P K</div>
            <div className="footer-tag">Founder · Creator · Builder</div>
            <div className="footer-socials">
              <div className="footer-socials">
                <a href="https://www.instagram.com/mr.karthikpk" target="_blank" rel="noopener noreferrer" className="soc">
                  <FaInstagram size={20} color="#E4405F" /> {/* Official Instagram Pink/Red */}
                </a>
                <a href="https://www.linkedin.com/in/karthik-p-k-0a7a15249" target="_blank" rel="noopener noreferrer" className="soc">
                  <FaLinkedin size={20} color="#0A66C2" /> {/* Official LinkedIn Blue */}
                </a>
                <a href="https://www.instagram.com/karthikpk.kannada" target="_blank" rel="noopener noreferrer" className="soc">
                  <FaInstagram size={20} color="#E4405F" /> {/* Official Instagram Pink/Red */}
                </a>
              </div>
            </div>
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
    </div>
  );
}