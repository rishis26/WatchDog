import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroMeta}>
          <span className={styles.metaLabel}>Security Software</span>
          <span className={styles.metaDivider}>—</span>
          <span className={styles.metaYear}>2025</span>
        </div>

        <h1 className={styles.heroTitle}>
          Your Laptop's
          <br />
          <span className={styles.titleEmphasis}>Silent</span>
          <br />
          Guardian
        </h1>

        <div className={styles.heroDetails}>
          <p className={styles.heroDesc}>
            Military-grade anti-theft software that captures intruders, tracks
            location, and secures your data. Invisible. Unstoppable.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Failed Attempts</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Protection</span>
            </div>
          </div>
        </div>

        <div className={styles.heroCtas}>
          <a href="#download" className={styles.primaryBtn}>
            Download
          </a>
          <a href="#features" className={styles.secondaryBtn}>
            View Capabilities
          </a>
        </div>
      </div>

      {/* Vertical Side Text */}
      <div className={styles.heroSideText}>
        <span>ANTI-THEFT PROTECTION</span>
      </div>

      {/* Decorative Elements */}
      <div className={styles.heroDecor}>
        <div className={styles.decorLine}></div>
        <div className={styles.decorDot}></div>
      </div>
    </section>
  );
}
