"use client";

import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Your Laptop's <br />
          <span className={styles.highlight}>Silent Guardian</span>
        </h1>

        <p className={styles.heroDesc}>
          Military-grade anti-theft software that captures intruders, tracks
          location, and secures your data. Invisible. Unstoppable.
        </p>

        <div className={styles.heroCtas}>
          <a href="#download" className={styles.primaryBtn}>
            Download
          </a>
          <a href="#features" className={styles.secondaryBtn}>
            View Capabilities
          </a>
        </div>
      </div>

      {/* 3D Visual */}
      <div className={styles.heroVisual}>
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
              stroke="#fff"
              strokeWidth="2"
            />
            <rect x="40" y="30" width="220" height="140" rx="6" fill="#000" />

            {/* Skeleton UI Lines - Dark Grey for 'proper' look */}
            <rect x="50" y="50" width="100" height="4" rx="2" fill="#333" />
            <rect x="50" y="60" width="140" height="4" rx="2" fill="#333" />
            <rect x="50" y="70" width="80" height="4" rx="2" fill="#333" />

            {/* Central Circle & Check - Solid Dark Background */}
            <circle cx="150" cy="100" r="28" fill="#1a1a1a" />
            <path
              d="M140 100l6 6 14-14"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M10 180h280l-20 20H30l-20-20z"
              fill="#050505"
              stroke="#fff"
              strokeWidth="2"
            />
            <rect x="100" y="180" width="100" height="4" rx="2" fill="#222" />
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
      </div>
    </section>
  );
}
