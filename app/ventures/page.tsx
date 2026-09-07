import Link from 'next/link';
import Image from 'next/image';
import styles from './ventures.module.css';

export default function VenturesPage() {
  return (
    <div className={styles.wrapper}>

      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.phWatermark}>VENTURES</div>
        <div className={styles.phInner}>
          <div>
            <div className={styles.phLabel}>My Ventures</div>
            <div className={styles.phTitle}>Brands<br />I Built</div>
          </div>
          <div className={styles.phRight}>
            <p className={styles.phDesc}>Two live brands built from scratch. Each one solving a real problem for real people. Both still growing.</p>
            <div className={styles.phCount}>
              <div className={styles.phCountNum}>02</div>
              <div className={styles.phCountText}>Active Ventures</div>
            </div>
          </div>
        </div>
      </section>

      {/* VENTURES LIST */}
      <div className={styles.venturesList}>

        {/* ALLOFFICIALS */}
        <div className={styles.vCard}>
          <div className={styles.vCardLeft}>
            <div>
              <div className={styles.vcNum}>Venture — 01</div>
              <div className={styles.vcLogoSlot}>
                <img 
                  src="/resources/AllofficialsLogo.png" 
                  alt="AllOfficials Logo" 
                  className={styles.vcLogo}
                  style={{ objectFit: 'contain' }} 
                />
              </div>
              <div className={styles.vcName}>AllOfficials</div>
              <p className={styles.vcDesc}>A sports-tech platform streamlining the recruitment and management of athletic officials globally. Bringing structure to a system that has always been informal.</p>
            </div>
            <div>
              <div className={styles.vcLinks}>
                <Link href="/allofficials" className={styles.btnDark}>Explore AllOfficials →</Link>
                <a href="https://allofficials.in" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>Visit allofficials.in ↗</a>
              </div>
            </div>
          </div>
          <div className={`${styles.vCardRight} ${styles.vcBgAo}`}>
            <div className={styles.vCardImgPh}>AllOfficials — Brand Image</div>
          </div>
        </div>

        {/* FUMET */}
        <div className={styles.vCard}>
          <div className={`${styles.vCardRight} ${styles.vcBgFm}`}>
            <div className={styles.vCardImgPh}>Fumet — Brand Image</div>
          </div>
          <div className={`${styles.vCardLeft} ${styles.vCardLeftFumet}`}>
            <div>
              <div className={styles.vcNum}>Venture — 02</div>
              <div className={styles.vcLogoSlot}>
                <img 
                  src="/resources/FumetLogo.png" 
                  alt="Fumet Logo" 
                  className={styles.vcLogo}
                  style={{ objectFit: 'contain' }} 
                />
              </div>
              <div className={styles.vcName}>Fumet</div>
              <p className={styles.vcDesc}>A premium culinary brand bridging authentic flavours and seasonal ingredients with modern consumption. Built on the belief that great food should be accessible to all.</p>
            </div>
            <div>
              <div className={styles.vcLinks}>
                <Link href="/fumet" className={styles.btnDark}>Explore Fumet →</Link>
                <a href="https://fumet.in" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>Visit fumet.in ↗</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FOUNDER LINE */}
      <section className={styles.founderLine}>
        <div>
          <div className={styles.flLabel}>Why I Build</div>
          <div className={styles.flText}>&quot;Every brand I build starts with a problem I couldn&apos;t stop thinking about.&quot;</div>
        </div>
        <div className={styles.flRight}>
          <p className={styles.flBody}>I don&apos;t build businesses to chase trends. I build them because I see a gap that nobody else is filling — and I can&apos;t move on until I try to fill it myself. AllOfficials and Fumet both came from that same restlessness.</p>
          <Link href="#" className={styles.flLink}>Read My Full Story →</Link>
        </div>
      </section>

    </div>
  );
}