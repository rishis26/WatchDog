"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../page.module.css";

const contributors = [
  {
    name: "Utkarsh Srivastava",
    github: "codes-by-utkarsh",
    role: "Lead Developer",
  },
  {
    name: "Kuldeep Choudhary",
    github: "Karlos-5160",
    role: "Core Contributor",
  },
  {
    name: "Rishi Shah",
    github: "rishis26",
    role: "Frontend Engineer",
  },
];

export default function Contributors() {
  return (
    <section className={styles.section} style={{ paddingBottom: "2rem" }}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.sectionTag}>THE TEAM</span>
        <h2>Architects of WatchDog</h2>
      </motion.div>

      <div className={styles.teamGrid}>
        {contributors.map((member, i) => (
          <motion.a
            key={i}
            href={`https://github.com/${member.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.teamCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={styles.memberAvatar}>
              <Image
                src={`https://github.com/${member.github}.png`}
                alt={member.name}
                width={80}
                height={80}
                className={styles.avatarImg}
              />
            </div>
            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <span className={styles.memberHandle}>@{member.github}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
