"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../page.module.css";

const contributors = [
  {
    name: "Utkarsh Srivastava",
    github: "codes-by-utkarsh",
    role: "Lead Developer",
  },
  {
    name: "Kuldeep Choudhary",
    github: "Karlos-5160",
    role: "Core Contributor",
  },
  {
    name: "Rishi Shah",
    github: "rishis26",
    role: "Frontend Engineer",
  },
];

export default function Footer() {
  const [showContributors, setShowContributors] = useState(false);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <Image src="/logo.png" alt="WD" width={48} height={48} />
            </div>
            <span>WatchDog</span>
          </div>
          <div className={styles.footerLinks}>
            <button
              onClick={() => setShowContributors(true)}
              className={styles.footerLinkBtn}
            >
              GitHub / Team
            </button>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>

      {showContributors && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowContributors(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.heroMeta}>
              <span className={styles.metaLabel}>Development</span>
              <span className={styles.metaDivider}>—</span>
              <span className={styles.metaYear}>Team</span>
            </div>
            <h3>Project Contributors</h3>
            <div className={styles.modalList}>
              {contributors.map((member, i) => (
                <li key={i}>
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <span style={{ color: "#fff", fontWeight: 700 }}>
                      {member.name}
                    </span>
                    <span style={{ marginLeft: "1rem", opacity: 0.5 }}>
                      @{member.github}
                    </span>
                  </a>
                </li>
              ))}
            </div>
            <div className={styles.modalActions}>
              <button
                onClick={() => setShowContributors(false)}
                className={`${styles.modalBtn} ${styles.acceptBtn}`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
