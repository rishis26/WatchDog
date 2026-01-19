"use client";

import { motion } from "framer-motion";
import styles from "../page.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContent}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className={styles.badge}>
          <span className={styles.pulse}></span>
          Advanced System Protection
        </motion.div>

        <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
          Your Laptop's <br />
          <span className={styles.highlight}>Silent Guardian</span>
        </motion.h1>

        <motion.p variants={fadeInUp} className={styles.heroDesc}>
          Military-grade anti-theft software that captures intruders, tracks
          location, and secures your data. Invisible. Unstoppable.
        </motion.p>

        <motion.div variants={fadeInUp} className={styles.heroCtas}>
          <a href="#download" className={styles.primaryBtn}>
            Download
          </a>
          <a href="#features" className={styles.secondaryBtn}>
            View Capabilities
          </a>
        </motion.div>
      </motion.div>

      {/* 3D Visual */}
      <motion.div
        className={styles.heroVisual}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.laptopContainer}>
          <svg
            viewBox="0 0 300 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.laptopSvg}
          >
            <rect
              x="30"
              y="20"
              width="240"
              height="160"
              rx="12"
              fill="#050505"
              stroke="#00ff88"
              strokeWidth="2"
            />
            <rect x="40" y="30" width="220" height="140" rx="6" fill="#000" />
            <rect
              x="50"
              y="45"
              width="100"
              height="4"
              rx="2"
              fill="#00ff88"
              opacity="0.6"
            />
            <rect
              x="50"
              y="55"
              width="140"
              height="4"
              rx="2"
              fill="#00ff88"
              opacity="0.4"
            />
            <rect
              x="50"
              y="65"
              width="80"
              height="4"
              rx="2"
              fill="#00ff88"
              opacity="0.5"
            />
            <circle cx="150" cy="110" r="25" fill="#00ff88" opacity="0.1" />
            <path
              d="M142 110l6 6 12-12"
              stroke="#00ff88"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 180h280l-20 20H30l-20-20z"
              fill="#151515"
              stroke="#00ff88"
              strokeWidth="1"
            />
            <rect x="110" y="180" width="80" height="6" rx="3" fill="#222" />
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
