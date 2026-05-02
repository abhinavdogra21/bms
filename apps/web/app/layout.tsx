import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Abhinav Dogra | Full-Stack Developer & Competitive Programmer",
  description: "Abhinav Dogra — Full-stack developer, competitive programmer (CF 1493, LC 2008), and systems researcher. B.Tech CS @ LNMIIT Jaipur. Building production-grade web applications.",
  keywords: ["Abhinav Dogra", "Full Stack Developer", "Competitive Programmer", "LNMIIT", "Codeforces", "LeetCode", "Next.js", "React"],
  authors: [{ name: "Abhinav Dogra" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
        <div className="grid-bg"></div>
        {children}
      </body>
    </html>
  );
}
