import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* NAVIGATION */}

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroWatermark}>
          CONTACT
        </div>

        <div className={styles.heroLabel}>
          Get in Touch
        </div>

        <h1 className={styles.heroTitle}>
          Let&apos;s Connect
        </h1>

        <p className={styles.heroDesc}>
          Whether it is a collaboration, a business inquiry,
          or a store visit — reach out and I will get back to
          you.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className={styles.contactMain}>
        <div className={styles.formWrap}>
          <div className={styles.formLabel}>
            Send a Message
          </div>

          <h2 className={styles.formTitle}>
            Fill Out the Form
          </h2>

          <form
            className={styles.form}
            action="#"
            method="POST"
          >
            {/* NAME + EMAIL */}
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div className={styles.field}>
              <label htmlFor="subject">
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                defaultValue="General Inquiry"
              >
                <option value="General Inquiry">
                  General Inquiry
                </option>

                <option value="Collaboration">
                  Collaboration
                </option>

                <option value="AllOfficials">
                  AllOfficials
                </option>

                <option value="Fumet">
                  Fumet
                </option>

                <option value="Press">
                  Press
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className={styles.field}>
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell me a little about why you are reaching out..."
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className={styles.formSubmit}
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}