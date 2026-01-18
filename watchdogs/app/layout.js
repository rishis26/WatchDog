import { Space_Grotesk, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "WatchDog - Advanced Anti-Theft Protection",
  description:
    "Protect your Windows laptop with instant intruder detection. Silent, powerful, and always watching.",
  keywords:
    "anti-theft, laptop security, Windows protection, webcam capture, Telegram bot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrains.variable} ${orbitron.variable}`}>
        {children}
      </body>
    </html>
  );
}
