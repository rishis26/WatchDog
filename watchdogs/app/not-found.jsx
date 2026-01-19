"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div
      className={styles.page}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "8rem",
          fontFamily: "var(--font-orbitron)",
          background: "linear-gradient(to right, #fff, #666)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          color: "#fff",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          marginBottom: "2.5rem",
          maxWidth: "400px",
        }}
      >
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className={styles.primaryBtn}>
        Back to Home
      </Link>
    </div>
  );
}
