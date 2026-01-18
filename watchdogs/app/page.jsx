"use client";

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
        <Navbar />
        <Hero />
        <Timeline />
        <SetupGuide />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
