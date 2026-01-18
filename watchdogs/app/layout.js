import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "WatchDog - Advanced Anti-Theft Protection for Windows",
  description:
    "Protect your Windows laptop with instant intruder detection, webcam capture, and remote control via Telegram. Silent, powerful, and always watching.",
  keywords:
    "anti-theft, laptop security, Windows protection, webcam capture, Telegram bot, remote control",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
