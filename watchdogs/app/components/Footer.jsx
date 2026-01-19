"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
              <Image src="/logo.png" alt="WD" width={40} height={40} />
            </div>
            <span>WatchDog</span>
          </div>
          <div className={styles.footerLinks}>
            <button
              onClick={() => setShowContributors(true)}
              className={styles.footerLinkBtn}
            >
              GitHub
            </button>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showContributors && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContributors(false)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Project Contributors</h3>
              <div
                className={styles.teamGrid}
                style={{ marginTop: "1rem", gap: "1rem" }}
              >
                {contributors.map((member, i) => (
                  <a
                    key={i}
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.teamCard}
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      padding: "1rem",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className={styles.memberAvatar}
                      style={{
                        width: "50px",
                        height: "50px",
                        marginBottom: "0",
                        marginRight: "1rem",
                      }}
                    >
                      <Image
                        src={`https://github.com/${member.github}.png`}
                        alt={member.name}
                        width={50}
                        height={50}
                        className={styles.avatarImg}
                      />
                    </div>
                    <div className={styles.memberInfo}>
                      <h3 style={{ fontSize: "1rem", margin: 0 }}>
                        {member.name}
                      </h3>
                      <span className={styles.memberHandle}>
                        @{member.github}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <div
                className={styles.modalActions}
                style={{ marginTop: "1.5rem" }}
              >
                <button
                  onClick={() => setShowContributors(false)}
                  className={`${styles.modalBtn} ${styles.acceptBtn}`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
