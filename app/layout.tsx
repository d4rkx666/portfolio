import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/Header";
import Loader from "@/components/Loader";
import { Footer } from "@/components/Footer";
import { menu_list } from "./routes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full-stack Developer",
  description: "fcatzin@hotmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <main className="relative min-h-screen bg-[#0A0A0F] text-gray-300 overflow-y-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />
      
          {/* Scan line effect #4D11BD or */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#4D11BD]/40 to-transparent opacity-50 animate-scan" />
          
          <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-15">
            <Header menu={menu_list}/>
            {children}
            <Footer/>
          </div>
        </main>
      </body>
    </html>
  );
}