import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farhan Azhar - Portfolio",
  description: "Modern minimalistic portfolio showcasing my work as a developer, designer, and creative professional.",
  keywords: ["Farhan Azhar", "Portfolio", "Developer", "Designer", "Web Development", "UI/UX"],
  authors: [{ name: "Farhan Azhar" }],
  robots: "index, follow",
  openGraph: {
    title: "Farhan Azhar - Portfolio",
    description: "Modern minimalistic portfolio showcasing my work as a developer, designer, and creative professional.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Azhar - Portfolio",
    description: "Modern minimalistic portfolio showcasing my work as a developer, designer, and creative professional.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistMono.variable} font-mono antialiased bg-background text-foreground noise-texture`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
