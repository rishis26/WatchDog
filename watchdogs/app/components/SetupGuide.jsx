import Image from "next/image";
import styles from "../page.module.css";

export default function SetupGuide() {
  const steps = [
    {
      num: "01",
      title: "Configure Bot",
      desc: "Message @BotFather on Telegram to create your bot and get the API token.",
    },
    {
      num: "02",
      title: "Run Installer",
      desc: "Launch WatchDog.exe, input your Token and Chat ID when prompted.",
    },
    {
      num: "03",
      title: "Go Dark",
      desc: "The installer vanishes. WatchDog is now running silently in the background.",
    },
  ];

  return (
    <section id="setup" className={styles.editorialSection}>
      <div className={styles.editorialHeader}>
        <div className={styles.heroMeta}>
          <span className={styles.metaLabel}>Installation</span>
          <span className={styles.metaDivider}>—</span>
          <span className={styles.metaYear}>3-Minute Setup</span>
        </div>
        <h2 className={styles.editorialTitle}>
          Deployment <span className={styles.titleEmphasis}>Process</span>
        </h2>
      </div>

      <div className={styles.guideWrapper}>
        <div className={styles.stepsList}>
          {steps.map((step, i) => (
            <div key={i} className={styles.editorialStep}>
              <span className={styles.statNumber}>{step.num}</span>
              <div className={styles.stepContent}>
                <h4 className={styles.featureTitle}>{step.title}</h4>
                <p className={styles.featureDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.terminalContainer}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalIcon}>
              <Image src="/logo.png" alt="CMD" width={16} height={16} />
            </div>
            <div className={styles.terminalTitle}>WatchDog.terminal</div>
          </div>
          <div className={styles.terminalBody}>
            <p>
              <span className={styles.dim}>sys &gt;</span>{" "}
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
              <span className={styles.cmd}>[SUCCESS] Service Installed.</span>
            </p>
            <p className={styles.dim}>Entering silent mode...</p>
            <div className={styles.cursor}>_</div>
          </div>
        </div>
      </div>
    </section>
  );
}
