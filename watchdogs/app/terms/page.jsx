"use client";

import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div
        className={styles.section}
        style={{
          paddingTop: "12rem",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontFamily: "var(--font-orbitron)",
              marginBottom: "2rem",
              color: "#fff",
            }}
          >
            Terms of Service & Ethical Use
          </h1>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#00ff88",
                marginBottom: "1rem",
                fontFamily: "var(--font-orbitron)",
              }}
            >
              1. Purpose of Software
            </h2>
            <p style={{ lineHeight: "1.6" }}>
              WatchDog is engineered strictly as an{" "}
              <strong>anti-theft and asset protection tool</strong>. Its code
              and functionality are designed to help owners recover stolen
              hardware and secure their data in the event of physical theft. It
              is <strong>NOT</strong> a surveillance tool, spyware, or means to
              monitor individuals without their consent.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#00ff88",
                marginBottom: "1rem",
                fontFamily: "var(--font-orbitron)",
              }}
            >
              2. Prohibited Uses
            </h2>
            <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
              By downloading and installing WatchDog, you agree that you will{" "}
              <strong>NOT</strong>:
            </p>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>
                Install this software on any device you do not own or have
                explicit administrative authorization to manage.
              </li>
              <li>
                Use the camera or geolocation features to track, stalk, or
                monitor individuals without their knowledge.
              </li>
              <li>
                Deploy this software for corporate espionage or unauthorized
                data collection.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#00ff88",
                marginBottom: "1rem",
                fontFamily: "var(--font-orbitron)",
              }}
            >
              3. Liability & Responsibility
            </h2>
            <p style={{ lineHeight: "1.6" }}>
              The developers of WatchDog assume no liability for the misuse of
              this software. The user assumes full legal responsibility for any
              actions taken using this tool. If you are found to be using
              WatchDog for illegal activities, your license (if applicable) will
              be revoked and usage may be reported to relevant authorities.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#00ff88",
                marginBottom: "1rem",
                fontFamily: "var(--font-orbitron)",
              }}
            >
              4. Data Privacy
            </h2>
            <p style={{ lineHeight: "1.6" }}>
              WatchDog operates locally on your machine. Data sent via Telegram
              encryption is subject to Telegram's privacy policy. We do not
              store, harvest, or sell your personal captures or location data.
              You are the sole owner of your security logs.
            </p>
          </section>

          <div
            style={{
              padding: "1.5rem",
              background: "rgba(0, 255, 136, 0.05)",
              border: "1px solid rgba(0, 255, 136, 0.2)",
              borderRadius: "12px",
              marginTop: "2rem",
            }}
          >
            <p
              style={{
                color: "#fff",
                fontWeight: "bold",
                marginBottom: "1.5rem",
              }}
            >
              By using WatchDog, you acknowledge that you have read, understood,
              and agreed to these terms.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1q123FLfly3RglU3bLBCvtLD4N39n9wAO"
              className={styles.primaryBtn}
              style={{ display: "inline-block" }}
            >
              Agree & Download
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
