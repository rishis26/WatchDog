import { useState } from "react";
import styles from "../page.module.css";

export default function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleDownloadClick = (e) => {
    if (!accepted) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const handleAccept = () => {
    setAccepted(true);
    setShowModal(false);
  };

  return (
    <>
      <section id="download" className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2>Secure Your Machine.</h2>
          <p>
            Join thousands of users who trust WatchDog for silent, effective
            anti-theft protection.
          </p>

          {!accepted ? (
            <button
              onClick={() => setShowModal(true)}
              className={styles.primaryBtn}
            >
              Get WatchDog
            </button>
          ) : (
            <a
              href="https://drive.google.com/uc?export=download&id=1q123FLfly3RglU3bLBCvtLD4N39n9wAO"
              className={styles.primaryBtn}
            >
              Start Download
            </a>
          )}
        </div>
      </section>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
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
                Installing this on a device you do not own or have permission to
                monitor is strictly prohibited.
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
                I Understand, Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
