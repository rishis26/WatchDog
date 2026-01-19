"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <motion.div
          className={styles.ctaContainer}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
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
              Download WatchDog v3.2
            </button>
          ) : (
            <motion.a
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              href="/watchdog-v3.2.exe" // This would be the real file
              className={styles.primaryBtn}
              style={{ background: "#fff", color: "#000" }} // Visual feedback
            >
              Start Download (.exe)
            </motion.a>
          )}
        </motion.div>
      </section>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
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
                  Installing this on a device you do not own or have permission
                  to monitor is strictly prohibited.
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
