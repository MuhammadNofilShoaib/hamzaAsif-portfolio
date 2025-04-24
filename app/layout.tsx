import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza Asif | Video Editor",
  description: "Helping creators boost watch time with high retention edits",
  icons: {
    icon: "/hamza.png",
  },
  openGraph: {
    title: "Hamza Asif | Video Editor",
    description: "Helping creators boost watch time with high retention edits",
    url: "https://hamzaedits.vercel.app/",
    siteName: "Hamza Asif Portfolio",
    images: [
      {
        url: "https://hamzaedits.vercel.app/hamza.png", // your preferred image URL
        width: 1200,
        height: 630,
        alt: "Hamza Asif - Video Editor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Asif | Video Editor",
    description: "Helping creators boost watch time with high retention edits",
    images: ["https://hamzaedits.vercel.app/hamza.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="font-sans bg-black">
        <Header/>
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
