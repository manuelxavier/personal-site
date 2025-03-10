import type { Metadata } from "next";
import { MainNav } from "@/components/common/main-nav";
import { Geist, Geist_Mono } from "next/font/google";
import { routesConfig } from "@/config/routes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Site Manuel Xavier",
  description: "Personal Site of Manuel Xavier",
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
         <MainNav items={routesConfig.mainNav} />
         <nav className="flex items-center gap-5"></nav>
        {children}
      </body>
    </html>
  );
}
