"use client";

import { motion } from "framer-motion";
import styles from "../page.module.css";

export default function CTA() {
  return (
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
        <a href="#" className={styles.primaryBtn}>
          Download WatchDog v3.2
        </a>
      </motion.div>
    </section>
  );
}
