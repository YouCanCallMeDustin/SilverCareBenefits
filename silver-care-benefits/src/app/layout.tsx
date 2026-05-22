import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
  title: {
    template: "%s | Silver Care Benefits",
    default: "Silver Care Benefits | Notary & Medicare Advisory Services",
  },
  description:
    "Professional Mobile Notary, Remote Online Notary (RON), and independent Medicare plan guidance. Safe, certified, and accessible services tailored for seniors and busy professionals in Reno, NV and nationwide.",
  metadataBase: new URL("https://silvercarebenefits.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Silver Care Benefits | Notary & Medicare Advisory Services",
    description:
      "Professional Mobile Notary, Remote Online Notary (RON), and independent Medicare plan guidance. Safe, certified, and accessible services.",
    url: "https://silvercarebenefits.com",
    siteName: "Silver Care Benefits",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  analytics?: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-200">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        {analytics}
        <Footer />
      </body>
    </html>
  );
}
