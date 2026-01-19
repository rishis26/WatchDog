"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import styles from "../page.module.css";
import { Icons } from "./Icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Timeline() {
  const features = [
    {
      title: "Intruder Capture",
      desc: "Automatically triggers the webcam upon 3 failed login attempts. Photos are instantly encrypted and sent to your secure Telegram channel with a timestamp.",
      icon: <Icons.Capture />,
    },
    {
      title: "Total Stealth Mode",
      desc: "Operates as a kernel-level system process with no taskbar icon, window, or tray presence. Completely invisible to standard task managers and authorized users.",
      icon: <Icons.Silent />,
    },
    {
      title: "Instant Telegram Link",
      desc: "Direct, low-latency connection to your mobile device. Receive high-res snapshots, location maps, and alert logs in milliseconds via the Telegram Bot API.",
      icon: <Icons.Telegram />,
    },
    {
      title: "Auto-Recovery Service",
      desc: "Intelligent watchdog daemon monitoring. If the main process is killed or crashes, it automatically respawns within seconds to ensure zero downtime.",
      icon: <Icons.Recovery />,
    },
    {
      title: "WiFi Triangulation",
      desc: "Uses nearby WiFi SSIDs and signal strengths to triangulate the device`s geolocation even without a GPS module. Maps are rendered instantly.",
      icon: <Icons.Geo />,
    },
    {
      title: "Remote Lock Command",
      desc: "Execute a remote system lock via chat command. Forces the specialized lock screen to engage, preventing any access until you authorize unlock.",
      icon: <Icons.Lock />,
    },
    {
      title: "Real-Time Alerts",
      desc: "Push notifications for system startup, shutdown, network changes, and peripheral connections. Stay informed of every interaction with your machine.",
      icon: <Icons.Alert />,
    },
    {
      title: "Boot-Level Shield",
      desc: "Integrates with Windows Services to launch before user login. Protects the machine from the moment power is engaged, securing the boot sequence.",
      icon: <Icons.Shield />,
    },
  ];

  return (
    <section id="features" className={styles.timelineSection}>
      <div className={styles.timelineHeader}>
        <span className={styles.sectionTag}>CAPABILITIES</span>
        <h2>Armed for Every Scenario</h2>
        <p>A complete suite of tools to protect your hardware and data.</p>
      </div>

      <div className={styles.centerLine}>
        <div className={styles.scanningDot}></div>
        <div className={styles.centerLineProgress} />
      </div>

      {features.map((feature, i) => (
        <div key={i} className={styles.timelineItem}>
          {/* Title Side */}
          <div className={`${styles.timelineSide} ${styles.titleSide}`}>
            <h3>{feature.title}</h3>
          </div>

          {/* Center Node */}
          <div className={styles.timelineNode}>
            <div className={styles.timelineIcon}>{feature.icon}</div>
          </div>

          {/* Detail Side */}
          <div className={`${styles.timelineSide} ${styles.detailSide}`}>
            <div className={styles.detailCard}>
              <p>{feature.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
