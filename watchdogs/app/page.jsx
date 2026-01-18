'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './page.module.css';

const Icons = {
  Capture: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  Silent: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ),
  Telegram: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  Recovery: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Geo: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Lock: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Alert: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  Shield: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["20%", "-70%"]);

  return (
    <>
      
      <div className={styles.page}>
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>WD</div>
              <span>WatchDog</span>
            </div>
            <div className={styles.navLinks}>
              <a href="#features">Features</a>
              <a href="#setup">How to Setup</a>
              <a href="#download" className={styles.navCta}>Get WatchDog</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
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
              Military-grade anti-theft software that captures intruders, 
              tracks location, and secures your data. Invisible. Unstoppable.
            </motion.p>

            <motion.div variants={fadeInUp} className={styles.heroCtas}>
              <a href="#download" className={styles.primaryBtn}>
                Download v3.2
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
              <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.laptopSvg}>
                <rect x="30" y="20" width="240" height="160" rx="12" fill="#050505" stroke="#00ff88" strokeWidth="2" />
                <rect x="40" y="30" width="220" height="140" rx="6" fill="#000" />
                <rect x="50" y="45" width="100" height="4" rx="2" fill="#00ff88" opacity="0.6" />
                <rect x="50" y="55" width="140" height="4" rx="2" fill="#00ff88" opacity="0.4" />
                <rect x="50" y="65" width="80" height="4" rx="2" fill="#00ff88" opacity="0.5" />
                <circle cx="150" cy="110" r="25" fill="#00ff88" opacity="0.1" />
                <path d="M142 110l6 6 12-12" stroke="#00ff88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 180h280l-20 20H30l-20-20z" fill="#151515" stroke="#00ff88" strokeWidth="1" />
                <rect x="110" y="180" width="80" height="6" rx="3" fill="#222" />
                <defs>
                   <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                         <feMergeNode in="coloredBlur"/>
                         <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                   </filter>
                </defs>
              </svg>
            </div>
          </motion.div>
        </section>

        {/* Central Timeline Features Section */}
        <section id="features" ref={targetRef} className={styles.timelineSection}>
          <motion.div 
            className={styles.timelineHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className={styles.sectionTag}>CAPABILITIES</span>
            <h2>Armed for Every Scenario</h2>
            <p>A complete suite of tools to protect your hardware and data.</p>
          </motion.div>

          <div className={styles.centerLine}>
            <div className={styles.scanningDot}></div>
            <motion.div style={{ height: scrollYProgress }} className={styles.centerLineProgress} />
          </div>

          {[
            { 
              title: 'Intruder Capture', 
              desc: 'Automatically triggers the webcam upon 3 failed login attempts. Photos are instantly encrypted and sent to your secure Telegram channel with a timestamp.', 
              icon: <Icons.Capture /> 
            },
            { 
              title: 'Total Stealth Mode', 
              desc: 'Operates as a kernel-level system process with no taskbar icon, window, or tray presence. Completely invisible to standard task managers and authorized users.', 
              icon: <Icons.Silent /> 
            },
            { 
              title: 'Instant Telegram Link', 
              desc: 'Direct, low-latency connection to your mobile device. Receive high-res snapshots, location maps, and alert logs in milliseconds via the Telegram Bot API.', 
              icon: <Icons.Telegram /> 
            },
            { 
              title: 'Auto-Recovery Service', 
              desc: 'Intelligent watchdog daemon monitoring. If the main process is killed or crashes, it automatically respawns within seconds to ensure zero downtime.', 
              icon: <Icons.Recovery /> 
            },
            { 
              title: 'WiFi Triangulation', 
              desc: 'Uses nearby WiFi SSIDs and signal strengths to triangulate the device`s geolocation even without a GPS module. Maps are rendered instantly.', 
              icon: <Icons.Geo /> 
            },
            { 
              title: 'Remote Lock Command', 
              desc: 'Execute a remote system lock via chat command. Forces the specialized lock screen to engage, preventing any access until you authorize unlock.', 
              icon: <Icons.Lock /> 
            },
            { 
              title: 'Real-Time Alerts', 
              desc: 'Push notifications for system startup, shutdown, network changes, and peripheral connections. Stay informed of every interaction with your machine.', 
              icon: <Icons.Alert /> 
            },
            { 
              title: 'Boot-Level Shield', 
              desc: 'Integrates with Windows Services to launch before user login. Protects the machine from the moment power is engaged, securing the boot sequence.', 
              icon: <Icons.Shield /> 
            },
          ].map((feature, i) => (
            <div key={i} className={styles.timelineItem}>
              
              {/* Title Side */}
              <motion.div 
                className={`${styles.timelineSide} ${styles.titleSide}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-15%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3>{feature.title}</h3>
              </motion.div>

              {/* Center Node */}
              <motion.div 
                className={styles.timelineNode}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, margin: "-15%" }}
                transition={{ duration: 0.4, ease: "backOut" }}
              >
                <div className={styles.timelineIcon}>{feature.icon}</div>
              </motion.div>

              {/* Detail Side */}
              <motion.div 
                className={`${styles.timelineSide} ${styles.detailSide}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-15%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className={styles.detailCard}>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
              
            </div>
          ))}
        </section>

        {/* How It Works Section */}
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
                  <p>Message @BotFather on Telegram to create your bot and get the API token.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className={styles.stepItem}>
                <div className={styles.stepNum}>02</div>
                <div className={styles.stepText}>
                  <h4>Run Installer</h4>
                  <p>Launch WatchDog.exe, input your Token and Chat ID when prompted.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className={styles.stepItem}>
                <div className={styles.stepNum}>03</div>
                <div className={styles.stepText}>
                  <h4>Go Dark</h4>
                  <p>The installer vanishes. WatchDog is now running silently in the background.</p>
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
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
              </div>
              <div className={styles.terminalBody}>
                <p><span className={styles.dim}>C:\Users\Admin&gt;</span> <span className={styles.cmd}>watchdog --init</span></p>
                <p className={styles.dim}>[INFO] Verifying system integrity...</p>
                <p className={styles.dim}>[INFO] Camera module: <span className={styles.cmd}>OK</span></p>
                <p className={styles.dim}>[INFO] Network status: <span className={styles.cmd}>CONNECTED</span></p>
                <br />
                <p><span className={styles.cmd}>[SUCCESS] WatchDog Service Installed.</span></p>
                <p className={styles.dim}>Entering silent mode...</p>
                <div className={styles.cursor}>_</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className={styles.ctaSection}>
          <motion.div 
            className={styles.ctaContainer}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Secure Your Machine.</h2>
            <p>Join thousands of users who trust WatchDog for silent, effective anti-theft protection.</p>
            <a href="#" className={styles.primaryBtn}>Download WatchDog v3.2</a>
          </motion.div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>WD</div>
              <span>WatchDog</span>
            </div>
            <div className={styles.footerLinks}>
              <a href="#">GitHub</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
