import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/* ── Font Instances ── */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: "POLYMER-X INDUSTRIAL | Engineering Excellence in Polymer Science",
  description:
    "Industrial leader in high-performance polymer science and chemical engineering solutions. ISO 9001:2015 certified manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${archivoNarrow.variable} h-full antialiased`}
    >
      <head>
        {/* Material Symbols Outlined — used for icons across the site */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
