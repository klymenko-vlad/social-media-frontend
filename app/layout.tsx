import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import LeftSidebar from "@/components/layout/leftsidebar/LeftSidebar";
import RightSidebar from "@/components/layout/rightsidebar/RightSidebar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newmedia",
  description:
    "Social media app that helps you connect and share with the people in your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Toaster />
      </body>
    </html>
  );
}
