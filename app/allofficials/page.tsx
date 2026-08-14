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
              AllOfficials is a premium activewear, gymwear, Indian lifestyle, and athleisure brand built around performance,
               comfort, accessible pricing, and modern fits. The brand focuses on discipline, confidence, self-expression, 
               and individuality, clearly visible in its collection.
              <br />
              <br />
              Not limited to traditional gym T-shirts, the current catalogue features
              over 79 products including gym shorts, ribbed vests, compression wear,
              baggy pants, joggers, tanks, cut-offs, hoodies, and lifestyle pieces.
              <br />
              <br />
              The brand started within a small room with a simple yet powerful idea,
               a hands-on approach, and limited resources. The founders started the 
               brand by modelling their products, ironing and packing themselves.
               <br>
               </br>
               With an ambition to become a 100 crore brand in the next 2 years, 
               Allofficials aims to build a brand that is not a generic apparel reseller. 
               Allofficials presents itself as a growing and fast-developing lifestyle and 
               home-grown brand.
               
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
              Allofficials is different not because it is growing fast but because
              it combines the functionality of gym with streetwear aesthetics in a
              smart way.
            </p>
          </div>
          <div className={styles.diffPoints}>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Aesthetics and performance-oriented</strong> — It is not a technical sportswear brand. 
                The collections combine bodybuilding aesthetics, performance wear, streetwear, and daily clothing.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Great collections and fabric</strong> — The collections are great for
                 both outside and inside the gym, and quality fabric is the major part with 
                 270 GSM 100% ring-spun combed cotton, 240 GSM premium French Terry, 250 GSM 
                 polyester, and 230 GSM polyester mesh.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Premium quality at fair pricing</strong> — Premium quality fabric available
                 at just one-third of most international brand pricing. It is a mid-premium Indian 
                 gymwear brand and not a luxury gymwear brand. The motto of the brand is 
                 “MADE TO BE GREAT”.
              </p>
            </div>
            <div className={styles.diffPoint}>
              <div className={styles.diffDot}></div>
              <p className={styles.diffText}>
                <strong>Great service</strong> — Consistent care at every touchpoint. Just browse and
                 buy your pick and have it delivered to your location. Connect easily through care@allofficials.in.
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
              The gym wear at Allofficials is designed for men who prioritize 
              performance, comfort, and modern style. It is suited for both regular
               gym goers and beginners.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              What products does AllOfficials offer?
            </h3>
            <p className={styles.faqAnswer}>
              AllOfficials is a gym and activewear brand that offers a gym collection 
              including compression wear, T-shirts, ribbed vests, shorts, joggers, jerseys,
               baggy pants, sweatshirts, hoodies, etc. These are great for daily wear and 
               intense workouts.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              Does AllOfficials offer compression T-shirts for men?
            </h3>
            <p className={styles.faqAnswer}>
              Yes. They offer both short- as well as the long-sleeve compression T-shirts.
               The collection also includes the N1 compression range catered to meet the
                demands of high intensity training sessions..
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              What fabrics are used in AllOfficials gym wear?
            </h3>
            <p className={styles.faqAnswer}>
              AllOfficials is a premium gymwear brand that uses quality fabrics like cotton,
              spandex/ elastane, polyester, nylon, mesh fabrics, and French terry, as per the
              product. These materials usually offer great moisture management, breathability,
              and comfort
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              Is AllOfficials gym wear suitable for intense workouts?
            </h3>
            <p className={styles.faqAnswer}>
              Yes. AllOfficials gym wear is specifically designed for intense workouts.
               These apparels focused on features such as moisture-wicking fabrics, 
               breathability, stretch, and fits focused on performance. The collections feature
                options that support comfort and movement.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              What type of AllOfficials clothing is suitable for strength
              training?
            </h3>
            <p className={styles.faqAnswer}>
              Compression T-shirts, stringers, stretchable joggers, and gym shorts
               are suited well for strength training, offering freedom of movement,
                comfort, and flexibility
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              Can AllOfficials gym wear be worn outside the gym?
            </h3>
            <p className={styles.faqAnswer}>
              Yes. AllOfficials gym and active wear is designed for both casual
              sessions as well as workouts. Versatile pieces including jerseys,
              T-shirts, and ribbed vests are readily available. These are great for 
              daily wear.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqH3}>
              How do you choose the right AllOfficials gym wear?
            </h3>
            <p className={styles.faqAnswer}>
              Choose the perfect gym wear as per your preferred fit, workout type, 
              weather, comfort, and fabric. Compression wear is great for intense training. 
              Shorts are for cardio. Strength workouts demand apparel like joggers.
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