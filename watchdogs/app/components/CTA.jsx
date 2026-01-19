import { useState } from "react";
import styles from "../page.module.css";

export default function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setShowModal(false);
  };

  return (
    <>
      <section id="download" className={styles.editorialSection}>
        <div className={styles.ctaGrid}>
          <div className={styles.ctaMain}>
            <div className={styles.heroMeta}>
              <span className={styles.metaLabel}>Final Step</span>
              <span className={styles.metaDivider}>—</span>
              <span className={styles.metaYear}>Deploy Now</span>
            </div>
            <h2 className={styles.editorialTitle}>
              Secure Your <span className={styles.titleEmphasis}>Machine</span>
            </h2>
            <p className={styles.editorialSubtitle}>
              Join thousands of users who trust WatchDog for silent, effective
              anti-theft protection.
            </p>
          </div>

          <div className={styles.ctaAction}>
            {!accepted ? (
              <button
                onClick={() => setShowModal(true)}
                className={styles.primaryBtn}
              >
                Get WatchDog
              </button>
            ) : (
              <a
                href="https://media.githubusercontent.com/media/rishis26/WatchDog/refs/heads/main/WatchDog_Installer_v3.zip?download=true"
                className={styles.primaryBtn}
              >
                Start Download
              </a>
            )}
          </div>
        </div>
      </section>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.heroMeta}>
              <span className={styles.metaLabel}>Legal</span>
              <span className={styles.metaDivider}>—</span>
              <span className={styles.metaYear}>T&C</span>
            </div>
            <h3>Terms & Conditions</h3>
            <ul className={styles.modalList}>
              <li>
                By downloading WatchDog, you agree to use this software
                responsibly.
              </li>
              <li>
                This tool is intended for personal security and anti-theft
                purposes only.
              </li>
              <li>
                Installing this on a device you do not own is strictly
                prohibited.
              </li>
            </ul>
            <div className={styles.modalActions}>
              <button
                onClick={() => setShowModal(false)}
                className={`${styles.modalBtn} ${styles.declineBtn}`}
              >
                Cancel
              </button>
              <button
                onClick={handleAccept}
                className={`${styles.modalBtn} ${styles.acceptBtn}`}
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
