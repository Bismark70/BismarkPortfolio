import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bismarkobeng.com"),
  title: "Bismark Obeng — Full-Stack Developer, UI/UX Designer & IT Specialist",
  description:
    "Portfolio of Bismark Obeng: full-stack software development, UI/UX design, IT support, Microsoft Office installation & activation, GitHub and hosting management, and motivational speaking.",
  keywords: [
    "Bismark Obeng",
    "Full-Stack Developer",
    "UI/UX Designer",
    "IT Support",
    "Microsoft Office Installation",
    "GitHub",
    "Web Hosting",
    "Motivational Speaker",
    "Portfolio",
  ],
  authors: [{ name: "Bismark Obeng" }],
  openGraph: {
    title: "Bismark Obeng — Full-Stack Developer, Designer & IT Specialist",
    description:
      "Software development, UI/UX design, IT support, Office installation & activation, hosting management and motivational speaking — one partner for it all.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bismark Obeng — Portfolio",
    description:
      "Full-Stack Developer · UI/UX Designer · IT Specialist · Motivational Speaker",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
