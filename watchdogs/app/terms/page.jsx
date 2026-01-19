"use client";

import Image from "next/image";
import styles from "../page.module.css";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className={styles.page}>
      {/* Editorial Header */}
      <header className={styles.simpleHeader}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image
              src="/logo.png"
              alt="WatchDog Logo"
              width={48}
              height={48}
              priority
            />
          </div>
          WatchDog
        </div>
      </header>

      <main>
        {/* Editorial Hero Section for Terms - Refined Spread */}
        <section
          className={styles.hero}
          style={{
            minHeight: "auto",
            padding: "8rem 8rem 4rem 8rem",
          }}
        >
          <div
            className={styles.heroContent}
            style={{ maxWidth: "1200px", width: "100%" }}
          >
            <div
              className={styles.heroMeta}
              style={{
                marginBottom: "3rem",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "2rem",
              }}
            >
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <span className={styles.metaLabel}>DOCUMENT</span>
                <span className={styles.metaDivider}>/</span>
                <span className={styles.metaYear}>LEGAL.01</span>
                <span className={styles.metaDivider}>/</span>
                <span className={styles.metaLabel}>REV. 2024</span>
              </div>
              <div className={styles.metaYear} style={{ opacity: 0.4 }}>
                INTERNAL USE ONLY
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: "6rem",
                alignItems: "end",
              }}
            >
              <h1
                className={styles.editorialTitle}
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  margin: 0,
                  lineHeight: "0.85",
                  letterSpacing: "-0.04em",
                }}
              >
                Terms of <span className={styles.titleEmphasis}>Service</span>
                <br />& Ethical Use
              </h1>

              <div
                className={styles.heroStats}
                style={{
                  borderLeft: "1px solid rgba(255,255,255,0.1)",
                  paddingLeft: "4rem",
                  paddingBottom: "1rem",
                }}
              >
                <div className={styles.statItem} style={{ gap: "0.25rem" }}>
                  <span
                    className={styles.statNumber}
                    style={{ fontSize: "4.5rem", letterSpacing: "-0.02em" }}
                  >
                    100%
                  </span>
                  <span className={styles.statLabel}>
                    ENCRYPTED LOCAL PRIVACY
                  </span>
                </div>
              </div>
            </div>

            <div
              className={styles.heroDetails}
              style={{
                marginTop: "4rem",
                borderBottom: "none",
                maxWidth: "750px",
              }}
            >
              <p
                className={styles.heroDesc}
                style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.8 }}
              >
                WatchDog is engineered strictly as an anti-theft and asset
                protection tool. By downloading and using this software, you
                agree to the conditions and ethical frameworks outlined below.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className={styles.editorialSection}>
          <div className={styles.featureGrid}>
            {/* 01. Purpose */}
            <div className={styles.featureItem}>
              <div className={styles.featureMeta}>
                <span className={styles.featureNum}>01</span>
                <div className={styles.featureLine}></div>
              </div>
              <h3 className={styles.featureTitle}>Purpose of Software</h3>
              <p className={styles.featureDesc}>
                WatchDog is engineered strictly as an{" "}
                <strong>anti-theft and asset protection tool</strong>. Its code
                and functionality are designed to help owners recover stolen
                hardware and secure their data in the event of physical theft.
                It is <strong>NOT</strong> a surveillance tool, spyware, or
                means to monitor individuals without their consent.
              </p>
            </div>

            {/* 02. Prohibited Uses */}
            <div className={styles.featureItem}>
              <div className={styles.featureMeta}>
                <span className={styles.featureNum}>02</span>
                <div className={styles.featureLine}></div>
              </div>
              <h3 className={styles.featureTitle}>Prohibited Uses</h3>
              <p className={styles.featureDesc}>
                By downloading and installing WatchDog, you agree that you will{" "}
                <strong>NOT</strong>:
                <br />
                <br />
                • Install this software on any device you do not own or have
                explicit authorization to manage.
                <br />
                • Use the camera or geolocation features to track or monitor
                individuals without their knowledge.
                <br />• Deploy this software for corporate espionage or
                unauthorized data collection.
              </p>
            </div>

            {/* 03. Liability */}
            <div className={styles.featureItem}>
              <div className={styles.featureMeta}>
                <span className={styles.featureNum}>03</span>
                <div className={styles.featureLine}></div>
              </div>
              <h3 className={styles.featureTitle}>
                Liability & Responsibility
              </h3>
              <p className={styles.featureDesc}>
                The developers of WatchDog assume no liability for the misuse of
                this software. The user assumes full legal responsibility for
                any actions taken using this tool. Illegal usage will result in
                license revocation and potential reporting to authorities.
              </p>
            </div>

            {/* 04. Data Privacy */}
            <div className={styles.featureItem}>
              <div className={styles.featureMeta}>
                <span className={styles.featureNum}>04</span>
                <div className={styles.featureLine}></div>
              </div>
              <h3 className={styles.featureTitle}>Data Privacy</h3>
              <p className={styles.featureDesc}>
                WatchDog operates locally on your machine. Data sent via
                Telegram encryption is subject to Telegram's privacy policy. We
                do not store, harvest, or sell your personal captures or
                location data. You are the sole owner of your security logs.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className={styles.editorialSection}
          style={{ borderBottom: "none" }}
        >
          <div className={styles.ctaGrid}>
            <div className={styles.editorialHeader} style={{ marginBottom: 0 }}>
              <h2 className={styles.editorialTitle}>
                Ready to <span className={styles.titleEmphasis}>Secure</span>{" "}
                Your Assets?
              </h2>
              <p className={styles.editorialSubtitle}>
                By clicking the button below, you acknowledge that you have
                read, understood, and agreed to these terms.
              </p>
            </div>
            <div className={styles.ctaAction}>
              <a
                href="https://media.githubusercontent.com/media/rishis26/WatchDog/refs/heads/main/WatchDog_Installer_v3.zip?download=true"
                className={styles.primaryBtn}
              >
                Agree & Download
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
