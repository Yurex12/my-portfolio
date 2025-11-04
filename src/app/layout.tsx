import Header from "../components/Header";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Adeyemi Yusuf | Fullstack Developer",
  description: "Portfolio of Adeyemi Yusuf - Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jetbrainsMono.variable} mx-auto max-w-5xl font-normal antialiased md:border-x`}
      >
        <Header />
        <main className="space-y-10">{children}</main>
      </body>
    </html>
  );
}
