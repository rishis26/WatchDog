'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ThreeBackground from './components/ThreeBackground';
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

const Laptop = ({ scrollProgress }) => {
  const rotateY = useTransform(scrollProgress, [0, 1], [0, 720]);
  const y = useTransform(scrollProgress, [0, 0.5, 1], [0, -40, 0]);
  
  return (
    <motion.div 
      className={styles.laptopContainer}
      style={{ rotateY, y }}
    >
      <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.laptopSvg}>
        <rect x="30" y="20" width="240" height="160" rx="12" fill="#111" stroke="#00ff88" strokeWidth="2" />
        <rect x="40" y="30" width="220" height="140" rx="6" fill="#000" />
        <rect x="50" y="45" width="100" height="4" rx="2" fill="#00ff88" opacity="0.6" />
        <rect x="50" y="55" width="140" height="4" rx="2" fill="#00ff88" opacity="0.4" />
        <rect x="50" y="65" width="80" height="4" rx="2" fill="#00ff88" opacity="0.5" />
        <circle cx="150" cy="110" r="25" fill="#00ff88" opacity="0.1" />
        <path d="M142 110l6 6 12-12" stroke="#00ff88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 180h280l-20 20H30l-20-20z" fill="#222" stroke="#00ff88" strokeWidth="1" />
        <rect x="110" y="180" width="80" height="6" rx="3" fill="#333" />
        <ellipse cx="150" cy="210" rx="100" ry="10" fill="url(#laptopShadow)" />
        <defs>
          <radialGradient id="laptopShadow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(150 210) rotate(90) scale(10 100)">
            <stop stopColor="#00ff88" stopOpacity="0.3" />
            <stop offset="1" stopColor="#00ff88" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

const StorySection = ({ children, index }) => {
  return (
    <motion.section 
      className={styles.storySection}
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      <ThreeBackground />
      
      <div ref={containerRef} className={styles.page}>
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>WD</div>
              <span>WatchDog</span>
            </div>
            <div className={styles.navLinks}>
              <a href="#features">Capabilities</a>
              <a href="#setup">Setup</a>
              <a href="#download" className={styles.navCta}>Get WatchDog</a>
            </div>
          </div>
        </nav>

        {/* Chapter 1: The Hook */}
        <StorySection index={0}>
          <div className={styles.hero}>
            <div className={styles.contentBox}>
              <div className={styles.badge}>
                <span className={styles.pulse}></span>
                CHAPTER 01: THE SILENT GUARD
              </div>
              <h1 className={styles.heroTitle}>
                Your Laptop's
                <br />
                <span className={styles.highlight}>Internal WatchDog</span>
              </h1>
              <p className={styles.textDesc}>
                What happens when you walk away? WatchDog is the invisible layer 
                that wakes up the moment an intruder touches your keys. 
                Stealthy. Precise. Instant.
              </p>
              <div className={styles.heroCtas}>
                <a href="#features" className={styles.primaryBtn}>Deep Dive</a>
                <a href="#setup" className={styles.secondaryBtn}>How it Works</a>
              </div>
            </div>
            <div className={styles.visualBox}>
              <Laptop scrollProgress={scrollYProgress} />
            </div>
          </div>
        </StorySection>

        {/* Chapter 2: The Power */}
        <StorySection index={1}>
          <div id="features" className={styles.featuresContent}>
            <span className={styles.superTitle}>CHAPTER 02: CAPABILITIES</span>
            <h2>Armed for Every Scenario</h2>
            <div className={styles.featuresGrid}>
              {[
                { title: 'Intruder Capture', icon: <Icons.Capture />, desc: 'Instant webcam snapshot.' },
                { title: 'Silent Mode', icon: <Icons.Silent />, desc: 'Hidden process execution.' },
                { title: 'Telegram Link', icon: <Icons.Telegram />, desc: 'Direct alerts to mobile.' },
                { title: 'Auto-Recovery', icon: <Icons.Recovery />, desc: 'Self-healing protection.' },
                { title: 'WiFi Geo', icon: <Icons.Geo />, desc: 'Network triangulation.' },
                { title: 'Remote Lock', icon: <Icons.Lock />, desc: 'Command via Telegram.' },
                { title: 'Instant Alert', icon: <Icons.Alert />, desc: 'Zero-latency push.' },
                { title: 'Boot Shield', icon: <Icons.Shield />, desc: 'Pre-login security.' },
              ].map((f, i) => (
                <motion.div 
                  key={i} 
                  className={styles.featureCard}
                  whileHover={{ y: -10, borderColor: '#00ff88' }}
                >
                  <div className={styles.fIcon}>{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </StorySection>

        {/* Chapter 3: The Process */}
        <StorySection index={2}>
          <div id="setup" className={styles.workflowGrid}>
            <div className={styles.contentBox}>
              <span className={styles.superTitle}>CHAPTER 03: THE SETUP</span>
              <h2>3 Minutes to Safety</h2>
              <div className={styles.stepList}>
                <div className={styles.vStep}>
                  <div className={styles.vNum}>01</div>
                  <div>
                    <h4>Bot Intel</h4>
                    <p>Obtain high-level API access from BotFather.</p>
                  </div>
                </div>
                <div className={styles.vStep}>
                  <div className={styles.vNum}>02</div>
                  <div>
                    <h4>Deployment</h4>
                    <p>Configure your unique ChatID to link the WatchDog.</p>
                  </div>
                </div>
                <div className={styles.vStep}>
                  <div className={styles.vNum}>03</div>
                  <div>
                    <h4>Shadow Mode</h4>
                    <p>WatchDog ducks into the background. Armed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.visualBox}>
              <div className={styles.terminalBox}>
                <pre>
                  <code>
                    {`# watchdog --init\n> System checking...\n> Camera: OK\n> Network: OK\n> Guardian: ARMED`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </StorySection>

        {/* Chapter 4: The Command */}
        <StorySection index={3}>
          <div id="download" className={styles.ctaBox}>
            <span className={styles.superTitle}>FINAL CHAPTER</span>
            <h2>Take Control.</h2>
            <p>Deploy the WatchDog on your system today.</p>
            <motion.a 
              href="#" 
              className={styles.dlBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download WatchDog v3.2
            </motion.a>
          </div>
        </StorySection>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div>WD <span>WatchDog</span></div>
            <div className={styles.fLinks}>
              <a href="#">GitHub</a>
              <a href="#">Support</a>
              <p>© 2026 drizzlehx</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
