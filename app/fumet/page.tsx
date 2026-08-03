import Link from 'next/link';
import Image from 'next/image';
import styles from './fumet.module.css';

export default function FumetPage() {
  return (
    <div className={styles.fumetWrapper}>

      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.phBgText}>FUMET</div>
        <div className={styles.phLogoRow}>
          <div className={styles.phLogoBox}>
            <div className={styles.logoPlaceholder}>
              <Image 
                src="/resources/FumetLogo.png" 
                alt="Fumet Logo" 
                width={140} 
                height={40} 
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.phLogoBadges}>
              <span className={styles.phVentureBadge}>Venture — 02</span>
            </div>
          </div>
          <div className={styles.phRightTop}>
            <p className={styles.phTagline}>A premium culinary brand bridging authentic flavours and seasonal ingredients with modern consumption.</p>
            <a href="https://fumet.in" target="_blank" rel="noopener noreferrer" className={styles.phVisit}>Visit fumet.in ↗</a>
          </div>
        </div>
        <div className={styles.phTitle}>Fumet</div>
      </section>

      {/* WHAT IS FUMET */}
      <section className={styles.whatIs}>
        <div className={styles.wiGrid}>
          <div>
            <div className={styles.secLabel}>What is Fumet</div>
            <h2 className={styles.wiTitle}>Premium Food Built on Authentic Flavours and Real Ingredients</h2>
          </div>
          <div>
            <p className={styles.wiBody}>
              Fumet is a premium culinary brand that was built on a simple belief — that great food should be authentic, accessible, and made with intention. Every product is crafted with seasonal ingredients and a deep respect for traditional flavours.<br /><br />
              [Karthik Sir to add 1–2 more lines about the specific products, the audience Fumet serves, and what makes it different.]
            </p>
            <div className={styles.wiTags}>
              <span className={styles.wiTag}>Premium Food</span>
              <span className={styles.wiTag}>Authentic Flavours</span>
              <span className={styles.wiTag}>Made in India</span>
              <span className={styles.wiTag}>D2C</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT IMAGE */}
      <div className={styles.productImg}>
        <div className={styles.productImgFrame}>
          <span className={styles.productImgPh}>Fumet — Product / Brand Image Here</span>
        </div>
      </div>

      {/* OFFERINGS */}
      <section className={styles.offerings}>
        <div className={styles.ofHeader}>
          <div className={styles.secLabel}>What We Offer</div>
          <h2 className={styles.ofTitle}>Every Product Made With Purpose and Precision</h2>
        </div>
        <div className={styles.ofGrid}>
          <div className={styles.ofCard}>
            <div className={styles.ofNum}>01</div>
            <div className={styles.ofName}>[Product Category 1]</div>
            <p className={styles.ofDesc}>[Karthik Sir to describe this product line in 2–3 lines. What is it, who is it for, and what makes it special?]</p>
          </div>
          <div className={styles.ofCard}>
            <div className={styles.ofNum}>02</div>
            <div className={styles.ofName}>[Product Category 2]</div>
            <p className={styles.ofDesc}>[Karthik Sir to describe this product line in 2–3 lines. What is it, who is it for, and what makes it special?]</p>
          </div>
          <div className={styles.ofCard}>
            <div className={styles.ofNum}>03</div>
            <div className={styles.ofName}>[Product Category 3]</div>
            <p className={styles.ofDesc}>[Karthik Sir to describe this product line in 2–3 lines. What is it, who is it for, and what makes it special?]</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className={styles.impact}>
        <div className={styles.impLabel}>Impact & Growth</div>
        <div className={styles.impGrid}>
          <div className={styles.impCardBig}>
            <p className={styles.impBody}>Fumet is not just food — it is a statement that premium quality and authentic taste should not be a luxury. Every order is a commitment to the belief that what goes on your plate should be made with care, not compromise.</p>
          </div>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section className={styles.founderNote}>
        <div className={styles.fnGrid}>
          <div className={styles.fnLabel}>From the Founder</div>
          <div>
            <div className={styles.fnQuote}>&quot;[Karthik Sir to write one powerful line about why he built Fumet — the personal reason, the love for food, the gap he saw in the market.]&quot;</div>
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
                <div className={styles.fnRole}>Founder, Fumet</div>
              </div>
            </div>
            <Link href="#" className={styles.fnLink}>Read the Full Story →</Link>
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className={styles.visitCta}>
        <div className={styles.vcTitle}>Ready to Explore Fumet?</div>
        <div className={styles.vcRight}>
          <a href="https://fumet.in" target="_blank" rel="noopener noreferrer" className={styles.btnWhite}>Visit fumet.in ↗</a>
          <Link href="/" className={styles.btnGhostWhite}>See Other Ventures</Link>
        </div>
      </section>

    </div>
  );
}