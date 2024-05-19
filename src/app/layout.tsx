import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/shared/layout/header/header";
import Footer from "@/shared/layout/footer/footer";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */ //fix bug icon awesome bi to first load

const inter = Inter({ subsets: ["latin"] });

export let metadata: Metadata = {
  title:
    "Hưng Silver - thương hiệu quần áo thời trang nam, nữ, trẻ em chất lượng",
  description: "hungsilvershop.click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAdmin: boolean = false;
  const isAuthenticated: boolean = false;
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header isAdmin={isAdmin} isAuthenticated={isAuthenticated} />
        {children}
        <Footer isAdmin={isAdmin} />
      </body>
    </html>
  );
}
