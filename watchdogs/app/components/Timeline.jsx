"use client";

import styles from "../page.module.css";
import { Icons } from "./Icons";

export default function Timeline() {
  const features = [
    {
      title: "Intruder Capture",
      desc: "Automatically triggers the webcam upon 3 failed login attempts. Photos are instantly encrypted and sent to your secure Telegram channel.",
      icon: <Icons.Capture />,
    },
    {
      title: "Total Stealth Mode",
      desc: "Operates as a kernel-level system process with no taskbar icon, window, or tray presence. Completely invisible to standard task managers.",
      icon: <Icons.Silent />,
    },
    {
      title: "Instant Telegram Link",
      desc: "Direct, low-latency connection to your mobile device. Receive high-res snapshots and alert logs in milliseconds via the Telegram Bot API.",
      icon: <Icons.Telegram />,
    },
    {
      title: "Auto-Recovery Service",
      desc: "Intelligent watchdog daemon monitoring. If the main process is killed, it automatically respawns within seconds to ensure zero downtime.",
      icon: <Icons.Recovery />,
    },
    {
      title: "WiFi Triangulation",
      desc: "Uses nearby WiFi SSIDs to triangulate device geolocation even without a GPS module. Maps are rendered instantly in your chat.",
      icon: <Icons.Geo />,
    },
    {
      title: "Remote Lock Command",
      desc: "Execute a remote system lock via chat command. Forces the specialized lock screen until you authorize unlock.",
      icon: <Icons.Lock />,
    },
    {
      title: "Real-Time Alerts",
      desc: "Push notifications for system startup, network changes, and peripheral connections. Professional monitoring.",
      icon: <Icons.Alert />,
    },
    {
      title: "Boot-Level Shield",
      desc: "Integrates with Windows Services to launch before user login. Protects the machine from the moment power is engaged.",
      icon: <Icons.Shield />,
    },
  ];

  return (
    <section id="features" className={styles.editorialSection}>
      <div className={styles.editorialHeader}>
        <div className={styles.heroMeta}>
          <span className={styles.metaLabel}>Core Capabilities</span>
          <span className={styles.metaDivider}>—</span>
          <span className={styles.metaYear}>v4.0</span>
        </div>
        <h2 className={styles.editorialTitle}>
          Armed for Every <span className={styles.titleEmphasis}>Scenario</span>
        </h2>
      </div>

      <div className={styles.featureGrid}>
        {features.map((feature, i) => (
          <div key={i} className={styles.featureItem}>
            <div className={styles.featureMeta}>
              <span className={styles.featureNum}>0{i + 1}</span>
              <div className={styles.featureLine}></div>
            </div>
            <div className={styles.featureContent}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
