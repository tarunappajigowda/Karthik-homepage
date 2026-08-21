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
              Fumet is a premium activewear brand that specializes in compression gear, athletic apparel, and training wear designed for strength and movement.
              <br />
              <br />
              The brand is built with a purpose of speed, movement, and strength during training sessions. The collection at Fumet is performance-driven, designed to hold up even during the most intense workout sessions.
              <br />
              <br />
              Fumet gym wear is also a great choice for casual evenings, outdoors, beach, and multiple spaces where you need to breathe comfort and unparalleled style.
              <br />
              <br />
              Fumet is not just gym gear; it is a statement and a brand that’s one of the best and associated with compression gear, gym T-shirts, shorts, track pants, joggers, and other fitness apparel.
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
                <strong>Performance-driven</strong> — Fumet is performance-oriented, suitable for training, with collections that include dry-fit track pants, compression T-shirts, performance-oriented T-shirts, shorts, etc.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Fulfills varied demands</strong> — These offer an athletic and sleek appearance with no complications. Collection goes beyond just traditional gym clothing. The track pants, regular T-shirts, polo T-shirts, and shorts make them great for both training and casual wear purposes.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Premium collection at great price:</strong> — Available at competitive prices, you would love to spend on its collection. Multiple fit options and athletic and minimal styling benefit buyers with accessible price positioning.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Suitable for all</strong> — Fumet collection suits different bodies differently with the best custom-made construction, cut, and sizing. Suitable for the Indian climate and body type, there is a huge collection for men.
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
              Karthik P K built Fumet to make a more accessible, better, and functional gym wear clothing line. Fumet is beyond overpriced foreign labels or cheaper imports. The idea is to create and develop an active gym wear brand with clothing that is attractive, comfortable, and functional. It's special for every athlete in India who sees a companion in their gym wear.
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
              Based in Hassan (Karnataka), Fumet is an active gear and gym wear brand that is designed with an idea to create high-performance wear for athletes in India.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>Does Fumet have a physical store?</h3>
            <p className={styles.faqAnswer}>
              Stores are located in Hassan, Karnataka, where you can visit in person and shop with confidence.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>Who is Fumet activewear designed for?</h3>
            <p className={styles.faqAnswer}>
              Fumet is for gym enthusiasts who expect their activewear to work with them. It is made to be built around all kinds of training environments.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>What products does Fumet offer?</h3>
            <p className={styles.faqAnswer}>
              Fumet stocks and sells premium activewear. Collections include compression wear, training T-shirts, shorts, joggers, and performance tops. All products are designed to meet the demands of training. Fabrics are designed for stretch, comfort, and durability.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              What fabrics does Fumet use in its activewear?
            </h3>
            <p className={styles.faqAnswer}>
              The fabrics used in Fumet collections are high-performance. The best features include moisture management ability, stretch, shape retention, and breathability. Fabrics are designed to meet the demands of the Indian climate and buyers.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              Is Fumet activewear suitable for intense gym workouts?
            </h3>
            <p className={styles.faqAnswer}>
              Fumet is built for high-intensity training including functional fitness, running, HIIT, weightlifting, and more.  The fabrics and the materials used are closely tested for performance under strict workout conditions as well as climate
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>Does Fumet ship across India?</h3>
            <p className={styles.faqAnswer}>
              Yes, you may order from any part of the country.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              How is Fumet different from other Indian activewear brands?
            </h3>
            <p className={styles.faqAnswer}>
              Fumet is locally rooted and caters to the demands of Indian athletes. The brand is not a cheap copy of Foreign products. It is original and built as per the body type of Indian buyers and the Indian climate.
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