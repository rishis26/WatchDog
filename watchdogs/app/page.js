import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="WatchDog Logo" width={40} height={40} />
            <span className={styles.logoText}>WatchDog</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#commands">Commands</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#download" className={styles.ctaButton}>Download</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Advanced Anti-Theft Protection
          </div>
          <h1 className={styles.heroTitle}>
            Your Laptop's
            <br />
            <span className="gradient-text">Silent Guardian</span>
          </h1>
          <p className={styles.heroDescription}>
            Protect your Windows laptop with instant intruder detection, webcam capture, 
            and remote control via Telegram. Runs completely invisible in the background.
          </p>
          <div className={styles.heroButtons}>
            <a href="#download" className={styles.primaryButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Installer
            </a>
            <a href="#how-it-works" className={styles.secondaryButton}>
              Learn More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>0.1s</div>
              <div className={styles.statLabel}>Detection Time</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>0.5s</div>
              <div className={styles.statLabel}>Photo Capture</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statLabel}>Protection</div>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.floatingCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className={styles.cardTitle}>WatchDog Monitor</span>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.terminalLine}>
                <span className={styles.prompt}>$</span>
                <span className={styles.command}>Monitoring Security Log...</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.success}>✓</span>
                <span>Service Active (SYSTEM)</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.success}>✓</span>
                <span>Commander Online</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.warning}>⚠</span>
                <span>Failed Login Detected</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.info}>📸</span>
                <span>Capturing intruder...</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.success}>✓</span>
                <span>Photo sent to Telegram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Powerful Features</h2>
          <p className={styles.sectionDescription}>
            Military-grade protection that works silently in the background
          </p>
        </div>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <h3>Instant Detection</h3>
            <p>Detects failed login attempts in just 0.1 seconds using Windows Event Log monitoring</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📸</div>
            <h3>Fast Capture</h3>
            <p>Takes webcam photo in 0.5 seconds using optimized DirectShow capture</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>
            <h3>Remote Control</h3>
            <p>Control your PC via Telegram with commands like /capture, /screen, /locate</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👻</div>
            <h3>Hidden Execution</h3>
            <p>Runs completely invisible in background with no visible windows</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔄</div>
            <h3>Auto-Restart</h3>
            <p>Survives crashes with 999 automatic retry attempts</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌐</div>
            <h3>Offline Queue</h3>
            <p>Saves photos when offline, uploads automatically when connected</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔐</div>
            <h3>Boot Protection</h3>
            <p>Starts before login on every boot with SYSTEM privileges</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📡</div>
            <h3>WiFi Location</h3>
            <p>Triangulate location using nearby WiFi networks and IP geolocation</p>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className={styles.commands}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Remote Commands</h2>
          <p className={styles.sectionDescription}>
            Control your PC from anywhere using Telegram
          </p>
        </div>
        <div className={styles.commandGrid}>
          <div className={styles.commandCard}>
            <div className={styles.commandName}>/ping</div>
            <div className={styles.commandDesc}>Check if the system is online and listening</div>
          </div>
          <div className={styles.commandCard}>
            <div className={styles.commandName}>/capture</div>
            <div className={styles.commandDesc}>Instantly take a photo using the webcam</div>
          </div>
          <div className={styles.commandCard}>
            <div className={styles.commandName}>/screen</div>
            <div className={styles.commandDesc}>Take a silent screenshot of the desktop</div>
          </div>
          <div className={styles.commandCard}>
            <div className={styles.commandName}>/stat</div>
            <div className={styles.commandDesc}>Get system statistics (CPU, RAM, Battery, Boot Time)</div>
          </div>
          <div className={styles.commandCard}>
            <div className={styles.commandName}>/locate</div>
            <div className={styles.commandDesc}>Get location report (IP + WiFi Triangulation)</div>
          </div>
          <div className={styles.commandCard}>
            <div className={styles.commandName}>/lock</div>
            <div className={styles.commandDesc}>Instantly lock the workstation</div>
          </div>
          <div className={styles.commandCard}>
            <div className={styles.commandName}>/msg "text"</div>
            <div className={styles.commandDesc}>Pop up a notepad message on the screen</div>
          </div>
          <div className={styles.commandCard}>
            <div className={styles.commandName}>/help</div>
            <div className={styles.commandDesc}>Show list of available commands</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionDescription}>
            Simple setup, powerful protection
          </p>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Create Telegram Bot</h3>
              <p>Message @BotFather on Telegram to create your bot and get your token</p>
            </div>
          </div>
          <div className={styles.stepConnector}></div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Install WatchDog</h3>
              <p>Run the installer and enter your bot token and chat ID</p>
            </div>
          </div>
          <div className={styles.stepConnector}></div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>You're Protected</h3>
              <p>WatchDog runs silently in the background, monitoring for threats 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className={styles.download}>
        <div className={styles.downloadCard}>
          <h2>Ready to Protect Your Laptop?</h2>
          <p>Download WatchDog and set up your security in under 5 minutes</p>
          <div className={styles.downloadButtons}>
            <a href="#" className={styles.downloadButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download WatchDog v3
            </a>
          </div>
          <div className={styles.requirements}>
            <p>Requirements: Windows 10/11 • Telegram Account</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Image src="/logo.png" alt="WatchDog Logo" width={32} height={32} />
            <span>WatchDog</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#features">Features</a>
            <a href="#commands">Commands</a>
            <a href="#download">Download</a>
          </div>
          <div className={styles.footerCopyright}>
            <p>Made with ❤️ by drizzlehx</p>
            <p>MIT License • Open Source</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
