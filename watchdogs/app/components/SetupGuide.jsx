import Image from "next/image";
import styles from "../page.module.css";

export default function SetupGuide() {
  return (
    <section id="setup" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>SETUP GUIDE</span>
        <h2>Deployment Process</h2>
        <p>From zero to protected in under 3 minutes.</p>
      </div>

      <div className={styles.stepsGrid}>
        <div className={styles.stepsContent}>
          <div className={styles.stepItem}>
            <div className={styles.stepNum}>01</div>
            <div className={styles.stepText}>
              <h4>Configure Bot</h4>
              <p>
                Message @BotFather on Telegram to create your bot and get the
                API token.
              </p>
            </div>
          </div>
          <div className={styles.stepItem}>
            <div className={styles.stepNum}>02</div>
            <div className={styles.stepText}>
              <h4>Run Installer</h4>
              <p>
                Launch WatchDog.exe, input your Token and Chat ID when prompted.
              </p>
            </div>
          </div>
          <div className={styles.stepItem}>
            <div className={styles.stepNum}>03</div>
            <div className={styles.stepText}>
              <h4>Go Dark</h4>
              <p>
                The installer vanishes. WatchDog is now running silently in the
                background.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.terminalWrapper}>
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
        </div>
      </div>
    </section>
  );
}
