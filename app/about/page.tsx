import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.phWatermark}>ABOUT</div>
        <div className={styles.phTop}>
          <div>
            <div className={styles.phLabel}>About Me</div>
            <h1 className={styles.phTitle}>Karthik<br />P K</h1>
          </div>
          <div className={styles.phRight}>
            <p className={styles.phDesc}>
              Founder of AllOfficials & Fumet. Kannada content creator with 11K+ community. Building brands that serve real people.
            </p>
            <div className={styles.phChips}>
              <span className={`${styles.chip} ${styles.chipAmber}`}>Entrepreneur</span>
              <span className={styles.chip}>Brand Founder</span>
              <span className={styles.chip}>Kannada Creator</span>
              <span className={styles.chip}>Builder</span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className={styles.story}>
        <div className={styles.storyContent}>
          <div className={styles.sectionLabel}>My Story</div>
          
          <div className={styles.storyBlock}>
            <div>
              <div className={styles.sbNum}>01</div>
              <h3 className={styles.sbHeading}>Early Background</h3>
            </div>
            <p className={styles.sbBody}>
              Karthik Sir to write this paragraph — where he grew up, family background, and the early signs of an entrepreneurial mindset. Keep it personal, real, and in his own voice.
            </p>
          </div>

          <div className={styles.storyBlock}>
            <div>
              <div className={styles.sbNum}>02</div>
              <h3 className={styles.sbHeading}>The Challenge</h3>
            </div>
            <p className={styles.sbBody}>
              Karthik Sir to write this paragraph — the specific gap or problem he identified, the struggle that pushed him to think differently, and why existing solutions weren't good enough.
            </p>
          </div>

          <div className={styles.storyBlock}>
            <div>
              <div className={styles.sbNum}>03</div>
              <h3 className={styles.sbHeading}>The Turning Point</h3>
            </div>
            <p className={styles.sbBody}>
              Karthik Sir to write this paragraph — the exact moment he decided to build AllOfficials and Fumet, what he risked, and how it felt to take that first step as a founder.
            </p>
          </div>

          <div className={styles.storyBlock}>
            <div>
              <div className={styles.sbNum}>04</div>
              <h3 className={styles.sbHeading}>Today</h3>
            </div>
            <p className={styles.sbBody}>
              Karthik Sir to write this paragraph — what the brands have achieved, the community he has built, and the vision he is working towards. End with one line about the bigger mission.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className={styles.valHeader}>
          <div className={styles.valLabel}>What Drives Me</div>
          <h2 className={styles.valTitle}>Three Beliefs That Guide Every Decision</h2>
        </div>
        <div className={styles.valGrid}>
          <div className={styles.valCard}>
            <div className={styles.valNum}>01</div>
            <h3 className={styles.valName}>Execution Over Ideas</h3>
            <p className={styles.valDesc}>Ideas are common. The people who execute relentlessly are rare. Every venture I build starts with action, not a perfect plan.</p>
          </div>
          <div className={styles.valCard}>
            <div className={styles.valNum}>02</div>
            <h3 className={styles.valName}>Real People First</h3>
            <p className={styles.valDesc}>Every product, every piece of content, every decision is made with the end user in mind. If it doesn't serve real people, it doesn't get built.</p>
          </div>
          <div className={styles.valCard}>
            <div className={styles.valNum}>03</div>
            <h3 className={styles.valName}>Local Stories, Global Impact</h3>
            <p className={styles.valDesc}>The Kannada community deserves to see itself represented. I create content in my own language because authenticity travels further than polish.</p>
          </div>
        </div>
      </section>

      {/* VENTURES BRIEF */}
      <section className={styles.venturesBrief}>
        <div className={styles.vbHeader}>
          <h2 className={styles.vbTitle}>My Ventures</h2>
          <Link href="/ventures" className={styles.vbLink}>See All Ventures →</Link>
        </div>
        <div className={styles.vbGrid}>
          <Link href="https://allofficials.com" className={styles.vbCard} target="_blank">
            <div className={styles.vbCardTop}>
              <span className={styles.vbName}>AllOfficials</span>
              <span className={styles.vbLive}>● Live</span>
            </div>
            <p className={styles.vbDesc}>Sports-tech platform streamlining the recruitment and management of athletic officials globally.</p>
            <span className={styles.vbCardLink}>Visit AllOfficials →</span>
          </Link>
          <Link href="https://fumet.com" className={styles.vbCard} target="_blank">
            <div className={styles.vbCardTop}>
              <span className={styles.vbName}>Fumet</span>
              <span className={styles.vbLive}>● Live</span>
            </div>
            <p className={styles.vbDesc}>Premium culinary brand bridging authentic flavours and seasonal ingredients with modern consumption.</p>
            <span className={styles.vbCardLink}>Visit Fumet →</span>
          </Link>
        </div>
      </section>

    </div>
  );
}