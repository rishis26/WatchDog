"use client";

import Image from "next/image";
import styles from "./page.module.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import SetupGuide from "./components/SetupGuide";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
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
        <Hero />
        <Timeline />
        <SetupGuide />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
