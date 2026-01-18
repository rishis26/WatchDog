"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add a small threshold to prevent jitter ("too responsive")
      if (currentScrollY > lastScrollY + 10 && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.nav} ${!isVisible ? styles.navHidden : ""}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image src="/logo.png" alt="WD" width={40} height={40} />
          </div>
          <span>WatchDog</span>
        </Link>
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#setup">How to Setup</a>
          <a href="#download" className={styles.navCta}>
            Get WatchDog
          </a>
        </div>
      </div>
    </nav>
  );
}
