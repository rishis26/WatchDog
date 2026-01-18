"use client";

import Image from "next/image";
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

export default function SetupGuide() {
  return (
    <section id="setup" className={styles.section}>
      <motion.div
        className={styles.sectionHeader}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <span className={styles.sectionTag}>SETUP GUIDE</span>
        <h2>Deployment Process</h2>
        <p>From zero to protected in under 3 minutes.</p>
      </motion.div>

      <div className={styles.stepsGrid}>
        <motion.div
          className={styles.stepsContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.stepItem}>
            <div className={styles.stepNum}>01</div>
            <div className={styles.stepText}>
              <h4>Configure Bot</h4>
              <p>
                Message @BotFather on Telegram to create your bot and get the
                API token.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.stepItem}>
            <div className={styles.stepNum}>02</div>
            <div className={styles.stepText}>
              <h4>Run Installer</h4>
              <p>
                Launch WatchDog.exe, input your Token and Chat ID when prompted.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.stepItem}>
            <div className={styles.stepNum}>03</div>
            <div className={styles.stepText}>
              <h4>Go Dark</h4>
              <p>
                The installer vanishes. WatchDog is now running silently in the
                background.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.terminalWrapper}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.terminalHeader}>
            <div className={styles.terminalIcon}>
              <Image src="/logo.png" alt="CMD" width={16} height={16} />
            </div>
            <div className={styles.terminalTitle}>
              Administrator: Command Prompt
            </div>
            <div className={styles.terminalControls}>
              <div className={styles.winBtn}>_</div>
              <div className={styles.winBtn}>□</div>
              <div className={`${styles.winBtn} ${styles.winClose}`}>×</div>
            </div>
          </div>
          <div className={styles.terminalBody}>
            <p>
              <span className={styles.dim}>C:\Users\Admin&gt;</span>{" "}
              <span className={styles.cmd}>watchdog --init</span>
            </p>
            <p className={styles.dim}>[INFO] Verifying system integrity...</p>
            <p className={styles.dim}>
              [INFO] Camera module: <span className={styles.cmd}>OK</span>
            </p>
            <p className={styles.dim}>
              [INFO] Network status:{" "}
              <span className={styles.cmd}>CONNECTED</span>
            </p>
            <br />
            <p>
              <span className={styles.cmd}>
                [SUCCESS] WatchDog Service Installed.
              </span>
            </p>
            <p className={styles.dim}>Entering silent mode...</p>
            <div className={styles.cursor}>_</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
