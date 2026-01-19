"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image src="/logo.png" alt="WD" width={40} height={40} />
          </div>
          <span>WatchDog</span>
        </div>
        <div className={styles.footerLinks}>
          <a href="#">GitHub</a>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
