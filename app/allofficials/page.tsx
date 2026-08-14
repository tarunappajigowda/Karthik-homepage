import Link from 'next/link';
import styles from './allofficials.module.css';

export default function Page() {
  return (
    <div className={styles.main}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroWm}>ALLOFFICIALS</div>
        <div className={styles.heroTop}>
          <div className={styles.heroLogoSlot}>Logo Here</div>
          <div className={styles.heroBadges}>
            <a
              href="https://allofficials.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badgeVisit}
            >
              allofficials.in ↗
            </a>
          </div>
        </div>
        <h1 className={styles.heroH1}>AllOfficials</h1>
        <p className={styles.heroIntro}>
          Premium performance wear engineered for athletes who train hard and
          demand more from their gear.
        </p>
      </section>

      {/* WHAT IS */}
      <section className={`${styles.sec} ${styles.secWhite}`}>
        <div className={styles.whatGrid}>
          <div>
            <div className={styles.secLabel}>Overview</div>
            <h2 className={styles.secH2}>What Is AllOfficials?</h2>
            <p className={styles.secSubhead} style={{ marginBottom: 0 }}>
              Built for athletes who refuse to compromise on performance.
            </p>
            <div className={styles.whatImg}>Product Image Here</div>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <p className={styles.whatBody}>
              AllOfficials is a performance gym wear brand built for athletes,
              fitness enthusiasts, and anyone who takes their training seriously.
              Every product is designed with one goal — to help you perform at your
              best without being held back by your clothing.
              <br />
              <br />
              From compression tees to training joggers, every piece in the
              AllOfficials lineup is engineered using high-performance fabrics that
              move with your body, manage sweat, and hold their shape through the
              toughest workouts.
              <br />
              <br />
              AllOfficials is not just clothing. It is performance gear made for the
              Indian athlete — built locally, priced fairly, and designed to compete
              with the best in the world.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
      <section className={`${styles.sec} ${styles.secDark}`}>
        <div className={styles.diffGrid}>
          <div>
            <div className={`${styles.secLabel} ${styles.secLabelLight}`}>
              Differentiation
            </div>
            <h2 className={`${styles.secH2} ${styles.secH2Light}`}>
              What Makes AllOfficials Different?
            </h2>
            <p className={styles.diffBody}>
              AllOfficials is built around a single belief — that performance wear
              should work as hard as the person wearing it. No compromises on
              fabric, fit, or function.
            </p>
          </div>
          <div className={styles.diffPoints}>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Performance-first fabrics</strong> — every material is
                selected for stretch, breathability, and durability under real
                training conditions, not just for looks.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Built for the Indian athlete</strong> — designed with Indian
                body types, climate, and training styles in mind. Not a copy of a
                Western brand, a product made for us.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Fair pricing without compromise</strong> — premium quality at
                a price that does not punish you for caring about your gear.
                Accessible to serious athletes at every level.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Founder-led quality control</strong> — every product goes
                through a standard set by someone who trains and demands the same
                from their own gear.
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
              Why Karthik P K Built AllOfficials
            </h2>
            <p className={styles.founderStatement}>
              &quot;I built AllOfficials around a simple idea: performance wear
              should feel as powerful as the person wearing it. I was tired of
              choosing between quality and affordability — so I built the brand that
              didn&apos;t make me choose.&quot;
            </p>
            <div className={styles.founderAttr}>
              <div className={styles.founderPhoto}></div>
              <div>
                <div className={styles.founderName}>Karthik P K</div>
                <div className={styles.founderRole}>Founder, AllOfficials</div>
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
            Everything you need to know about AllOfficials gym wear.
          </p>
        </div>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              Who is AllOfficials gym wear designed for?
            </h3>
            <p className={styles.faqAnswer}>
              AllOfficials is designed for men who train seriously — whether you are
              a beginner building your first routine or an experienced athlete
              pushing your limits daily. If you demand performance from your body,
              your gear should match that demand.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              What products does AllOfficials offer?
            </h3>
            <p className={styles.faqAnswer}>
              AllOfficials currently offers compression T-shirts, gym joggers,
              training shorts, and cut-offs. Each category is designed for a
              specific training need and built with performance-grade fabrics that
              hold up through intense use.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              Does AllOfficials offer compression T-shirts for men?
            </h3>
            <p className={styles.faqAnswer}>
              Yes. AllOfficials compression T-shirts are one of the core products in
              the range. They are made with high-stretch, moisture-wicking fabric
              designed to support your muscles, reduce fatigue, and keep you
              comfortable through every workout.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              What fabrics are used in AllOfficials gym wear?
            </h3>
            <p className={styles.faqAnswer}>
              AllOfficials uses high-performance blended fabrics selected for four
              key properties — stretch, breathability, moisture management, and
              durability. Every fabric is tested for real training conditions, not
              just comfort in everyday wear.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              Is AllOfficials gym wear suitable for intense workouts?
            </h3>
            <p className={styles.faqAnswer}>
              Absolutely. AllOfficials is built specifically for high-intensity
              training — weightlifting, HIIT, functional fitness, and strength
              training. The fabrics, stitching, and construction are all engineered
              to hold up under maximum effort.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              What type of AllOfficials clothing is suitable for strength
              training?
            </h3>
            <p className={styles.faqAnswer}>
              For strength training, the compression T-shirts and gym joggers work
              best together. The compression tee supports your muscles through
              heavy lifts while the joggers give you a full range of motion for
              squats, deadlifts, and compound movements.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              Can AllOfficials gym wear be worn outside the gym?
            </h3>
            <p className={styles.faqAnswer}>
              Yes. AllOfficials is designed with a clean, minimal aesthetic that
              works both inside and outside the gym. The joggers and tees in
              particular are built to transition easily from a training session to
              everyday wear without looking out of place.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              How do you choose the right AllOfficials gym wear?
            </h3>
            <p className={styles.faqAnswer}>
              Start with your training style. If you run hot or do cardio-heavy
              sessions, go for cut-offs or shorts with the compression tee. For
              strength training, the jogger and compression tee combo is the most
              popular choice. Check the size guide on the website for the best fit.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaStrip}>
        <div className={styles.ctaTitle}>Ready to Train in AllOfficials?</div>
        <div className={styles.ctaBtns}>
          <Link href="#" className={styles.btnWhite}>
            Shop AllOfficials ↗
          </Link>
          <Link href="#" className={styles.btnGhost}>
            See Other Ventures
          </Link>
        </div>
      </section>
    </div>
  );
}