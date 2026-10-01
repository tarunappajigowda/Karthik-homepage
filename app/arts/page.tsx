import styles from "./arts.module.css";

export default function ArtPage() {
  const artworks = [
    "Artwork 1",
    "Artwork 2",
    "Artwork 3",
    "Artwork 4",
    "Artwork 5",
    "Artwork 6",
  ];

  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroWm}>ART</div>

        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroLabel}>
              The Art of Karthik P K
            </div>

            <h1 className={styles.heroH1}>
              Portraits
              <br />
              in Colour
            </h1>
          </div>

          <p className={styles.heroDesc}>
            Beyond building brands, I paint. A collection of portraits in
            watercolour, acrylic, and soft pastel — each one a study of light,
            expression, and emotion.
          </p>
        </div>
      </section>

      {/* MEDIUM STRIP */}
      <div className={styles.mediumStrip}>
        <span className={styles.mediumStripLabel}>
          Working across —
        </span>

        <span className={styles.mediumTag}>Watercolour</span>
        <span className={styles.mediumTag}>Acrylic</span>
        <span className={styles.mediumTag}>Soft Pastel</span>
        <span className={styles.mediumTag}>Portraiture</span>
      </div>

      {/* GALLERY */}
      <section className={styles.gallery}>
        <div className={styles.galleryHeader}>
          <div className={styles.galleryLabel}>Gallery</div>

          <h2 className={styles.galleryTitle}>
            Selected Works
          </h2>
        </div>

        <div className={styles.artGrid}>
          {artworks.map((artwork, index) => (
            <div
              className={styles.artFrame}
              key={artwork}
            >
              <span className={styles.artPh}>
                {artwork}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaStrip}>
        <div className={styles.ctaTitle}>
          Like What You See?
        </div>

        <div className={styles.ctaBtns}>
          <a
            href="#"
            className={styles.btnWhite}
          >
            Follow My Art on Instagram ↗
          </a>

          <a
            href="/contact"
            className={styles.btnGhost}
          >
            Get in Touch
          </a>
        </div>
      </section>

    </main>
  );
}