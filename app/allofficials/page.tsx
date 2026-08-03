import Link from 'next/link';
import Image from 'next/image';
import styles from './allofficials.module.css';

export default function AllOfficialsPage() {
  return (
    <div className={styles.wrapper}>

      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.phBgText}>ALLOFFICIALS</div>

        {/* LOGO ROW */}
        <div className={styles.phLogoRow}>
          <div className={styles.phLogoBox}>
            <div className={styles.logoPlaceholder}>
              <img 
                src="/resources/AllofficialsLogo.png" 
                alt="AllOfficials Logo"  
                className={styles.vcLogo}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className={styles.phRightTop}>
            <p className={styles.phTagline}>A sports-tech platform streamlining the recruitment and management of athletic officials globally.</p>
            <a href="https://allofficials.in" target="_blank" rel="noopener noreferrer" className={styles.phVisit}>Visit allofficials.in ↗</a>
          </div>
        </div>

        <div className={styles.phTitle}>AllOfficials</div>
      </section>

      {/* WHAT IS */}
      <section className={styles.whatIs}>
        <div className={styles.wiGrid}>
          <div>
            <div className={styles.secLabel}>What is AllOfficials</div>
            <h2 className={styles.wiTitle}>Sports-Tech Built for the People Who Run the Game</h2>
          </div>
          <div>
            <p className={styles.wiBody}>
              AllOfficials is a sports-tech platform that solves a real problem in the sports ecosystem — the recruitment, management, and deployment of athletic officials. From referees to scorers, AllOfficials brings structure to a system that has always been informal.<br /><br />
              [Karthik Sir to add 1–2 more lines about the specific problem it solves and who it serves.]
            </p>
            <div className={styles.wiTags}>
              <span className={styles.wiTag}>Sports Technology</span>
              <span className={styles.wiTag}>Official Management</span>
              <span className={styles.wiTag}>Made in India</span>
              <span className={styles.wiTag}>B2B + B2C</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <div className={styles.productImg}>
        <div className={styles.productImgFrame}>
          <span className={styles.productImgPh}>AllOfficials — Product / Brand Image Here</span>
        </div>
      </div>

      {/* OFFERINGS */}
      <section className={styles.offerings}>
        <div className={styles.ofHeader}>
          <div className={styles.secLabel}>What We Offer</div>
          <h2 className={styles.ofTitle}>Built Around the Needs of Officials and Organisers</h2>
        </div>
        <div className={styles.ofGrid}>
          <div className={styles.ofCard}>
            <div className={styles.ofNum}>01</div>
            <div className={styles.ofName}>Official Recruitment</div>
            <p className={styles.ofDesc}>[Karthik Sir to describe this offering in 2–3 lines. What does the platform do for recruiting officials?]</p>
          </div>
          <div className={styles.ofCard}>
            <div className={styles.ofNum}>02</div>
            <div className={styles.ofName}>Event Management</div>
            <p className={styles.ofDesc}>[Karthik Sir to describe this offering in 2–3 lines. How does AllOfficials help manage sports events?]</p>
          </div>
          <div className={styles.ofCard}>
            <div className={styles.ofNum}>03</div>
            <div className={styles.ofName}>Performance Tracking</div>
            <p className={styles.ofDesc}>[Karthik Sir to describe this offering in 2–3 lines. What tracking or reporting does the platform provide?]</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className={styles.impact}>
        <div className={styles.impLabel}>Impact & Growth</div>
        <div className={styles.impGrid}>
          <div>
            <p className={styles.impBody}>AllOfficials is not just a product — it is a movement to bring professionalism to every level of sport in India. From small-town tournaments to national-level competitions, every official deserves a system that works.</p>
          </div>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section className={styles.founderNote}>
        <div className={styles.fnGrid}>
          <div className={styles.fnLabel}>From the Founder</div>
          <div>
            <div className={styles.fnQuote}>&quot;[Karthik Sir to write one powerful line about why he built AllOfficials — the personal reason, the problem he saw, the belief behind it.]&quot;</div>
            <div className={styles.fnAttr}>
              <div className={styles.fnPhoto}>
                <Image 
                  src="/resources/Karthik_sir_photo_for_website.jpeg" 
                  alt="Karthik P K" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div className={styles.fnName}>Karthik P K</div>
                <div className={styles.fnRole}>Founder, AllOfficials</div>
              </div>
            </div>
            <Link href="#" className={styles.fnLink}>Read the Full Story →</Link>
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className={styles.visitCta}>
        <div className={styles.vcTitle}>Ready to Explore AllOfficials?</div>
        <div className={styles.vcRight}>
          <a href="https://allofficials.in" target="_blank" rel="noopener noreferrer" className={styles.btnWhite}>Visit allofficials.in ↗</a>
          <Link href="/" className={styles.btnGhostWhite}>See Other Ventures</Link>
        </div>
      </section>

    </div>
  );
}