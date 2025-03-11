import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/features/Header/container";
import "@/styles/customContainer.css"
import "@/styles/fluids.css"
const lexend = Lexend({
  variable: "--font-lexend",  // CSS değişkenini tanımla
  subsets: ["latin"],  // Latin karakter setini kullan
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Bank",
  description: "Banking company website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} antialiased custom-container`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
