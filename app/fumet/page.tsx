import Link from 'next/link';
import styles from './fumet.module.css';

export default function Page() {
  return (
    <div className={styles.main}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroWm}>FUMET</div>
        <div className={styles.heroTop}>
          <div className={styles.heroLogoSlot}>Logo Here</div>
          <div className={styles.heroBadges}>
            <span className={styles.badgeLocation}>📍 Hassan, Karnataka</span>
            <a
              href="https://fumet.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badgeVisit}
            >
              fumet.in ↗
            </a>
          </div>
        </div>
        <h1 className={styles.heroH1}>Fumet</h1>
        <p className={styles.heroIntro}>
          Premium activewear built for the Indian athlete — designed to perform,
          built to last, and proudly rooted in Karnataka.
        </p>
      </section>

      {/* STORE STRIP */}
      <div className={styles.storeStrip}>
        <div className={styles.storeLeft}>
          <div className={styles.storeIcon}>🏪</div>
          <div>
            <div className={styles.storeTitle}>Fumet Store — Hassan, Karnataka</div>
            <div className={styles.storeAddr}>
              Visit us in person · Hassan, Karnataka, India · Open 7 days
            </div>
          </div>
        </div>
        <div className={styles.storeRight}>
          <span className={styles.storeBadge}>Store Open</span>
          <Link href="https://www.google.com/maps/dir/?api=1&destination=13.011289159542107,76.10611946494602" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.storeLink}>
            Get Directions ↗
          </Link>
        </div>
      </div>

      {/* WHAT IS FUMET */}
      <section className={`${styles.sec} ${styles.secWhite}`}>
        <div className={styles.whatGrid}>
          <div>
            <div className={styles.secLabel}>Overview</div>
            <h2 className={styles.secH2}>What Is Fumet?</h2>
            <p className={styles.secSubhead}>
              Premium activewear crafted for those who move with purpose.
            </p>
            <div className={styles.whatImg}>Product Image Here</div>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <p className={styles.whatBody}>
              Fumet is a premium activewear brand built in India for the Indian
              athlete. Every piece is designed to bridge the gap between
              high-performance functionality and a clean, premium aesthetic — so
              you look and feel your best whether you are in the gym, on the track,
              or on the move.
              <br />
              <br />
              Based in Hassan, Karnataka, Fumet was built with a deep understanding
              of what Indian athletes actually need — gear that holds up through
              intense workouts, fits Indian body types well, and is accessible
              without cutting corners on quality.
              <br />
              <br />
              Fumet is not just activewear. It is a statement that premium should
              not mean imported, and performance should not mean unaffordable.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES FUMET DIFFERENT */}
      <section className={`${styles.sec} ${styles.secDark}`}>
        <div className={styles.diffGrid}>
          <div>
            <div className={`${styles.secLabel} ${styles.secLabelLight}`}>
              Differentiation
            </div>
            <h2 className={`${styles.secH2} ${styles.secH2Light}`}>
              What Makes Fumet Different?
            </h2>
            <p className={styles.diffBody}>
              Fumet was built on a gap nobody else was filling — premium activewear
              made in India, for India. Not a cheaper version of a foreign brand. A
              brand built from the ground up for the Indian athlete.
            </p>
          </div>
          <div className={styles.diffPoints}>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Locally rooted, globally standard</strong> — designed and
                built in Hassan, Karnataka, Fumet meets international quality
                benchmarks while staying grounded in Indian needs and values.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Premium without the premium price</strong> — every Fumet
                product is priced to be accessible to serious athletes at every
                stage, without compromising on fabric, construction, or fit.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Fit for Indian bodies</strong> — sizing, cut, and
                construction are all calibrated to Indian body types and climate,
                not adapted from a Western template.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>A physical store you can visit</strong> — unlike most D2C
                brands, Fumet has a real store in Hassan where you can see, touch,
                and try before you buy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STATEMENT */}
      <section className={`${styles.sec} ${styles.secWhite}`}>
        <div className={styles.founderInner}>
          <div className={styles.founderLabel}>From the Founder</div>
          <div>
            <h2 className={styles.secH2} style={{ marginBottom: '24px' }}>
              Why Karthik P K Built Fumet
            </h2>
            <p className={styles.founderStatement}>
              &quot;I built Fumet because I believed the Indian athlete deserved
              better — not cheaper imports, not overpriced foreign labels, but
              something built for us, by us. Fumet started in Hassan and I want it
              to represent every athlete in this country who trains hard and
              expects their gear to do the same.&quot;
            </p>
            <div className={styles.founderAttr}>
              <div className={styles.founderPhoto}></div>
              <div>
                <div className={styles.founderName}>Karthik P K</div>
                <div className={styles.founderRole}>Founder, Fumet</div>
              </div>
            </div>
            <Link href="/about" className={styles.founderLink}>
              Read the Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.sec} ${styles.secLight}`}>
        <div style={{ marginBottom: '56px' }}>
          <div className={styles.secLabel}>FAQ</div>
          <h2 className={styles.secH2}>Frequently Asked Questions</h2>
          <p className={styles.secSubhead}>
            Everything you need to know about Fumet activewear.
          </p>
        </div>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>What is Fumet and where is it based?</h3>
            <p className={styles.faqAnswer}>
              Fumet is a premium activewear brand founded by Karthik P K and based in
              Hassan, Karnataka, India. It was built to offer Indian athletes
              high-quality performance wear that fits well, lasts long, and is
              priced fairly — without compromising on any front.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>Does Fumet have a physical store?</h3>
            <p className={styles.faqAnswer}>
              Yes. Fumet has a store in Hassan, Karnataka where you can visit, try
              on the products, and buy in person. This is one of the things that sets
              Fumet apart from most activewear brands — you can actually
              experience the product before purchasing.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>Who is Fumet activewear designed for?</h3>
            <p className={styles.faqAnswer}>
              Fumet is designed for Indian men and women who take their fitness
              seriously and want activewear that keeps up. Whether you train at a
              local gym, run outdoors, or work out at home, Fumet is built to
              perform across all training environments.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>What products does Fumet offer?</h3>
            <p className={styles.faqAnswer}>
              Fumet offers a range of premium activewear including training
              T-shirts, compression wear, joggers, shorts, and performance tops.
              Each product is designed for specific training needs and built with
              fabrics that prioritise comfort, stretch, and durability.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              What fabrics does Fumet use in its activewear?
            </h3>
            <p className={styles.faqAnswer}>
              Fumet uses high-performance fabric blends selected for four key
              qualities — stretch, moisture management, breathability, and shape
              retention. Every fabric choice is made with Indian climate and
              training conditions in mind, not sourced from a generic global
              catalogue.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              Is Fumet activewear suitable for intense gym workouts?
            </h3>
            <p className={styles.faqAnswer}>
              Absolutely. Fumet activewear is built for high-intensity training —
              weightlifting, functional fitness, HIIT, running, and everything in
              between. The construction and materials are tested for performance
              under real workout conditions, not just casual wear.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>Does Fumet ship across India?</h3>
            <p className={styles.faqAnswer}>
              Yes. Fumet ships pan-India so you can order from anywhere in the
              country. If you are in or near Hassan, Karnataka, you also have the
              option to visit the store and shop in person for the full Fumet
              experience.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              How is Fumet different from other Indian activewear brands?
            </h3>
            <p className={styles.faqAnswer}>
              Fumet is founder-led, locally rooted, and built specifically around
              Indian athlete needs. It is not a white-label product or a cheaper
              copy of a foreign brand. Every design and fabric decision is made
              with the Indian body type, climate, and training culture in mind — and
              backed by a physical store presence in Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaStrip}>
        <div className={styles.ctaTitle}>Ready to Train in Fumet?</div>
        <div className={styles.ctaBtns}>
          <Link href="#" className={styles.btnWhite}>
            Shop Fumet ↗
          </Link>
          <Link href="#" className={styles.btnGhost}>
            See Other Ventures
          </Link>
        </div>
      </section>

    </div>
  );
}