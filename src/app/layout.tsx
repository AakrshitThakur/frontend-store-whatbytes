import type { Metadata } from "next";
import { StoreProvider } from "@/utils/wrapper/StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Store WhatBytes",
  description: "Store Whatbytes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Edu+SA+Hand:wght@400..700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Special+Gothic+Expanded+One&display=swap');
        </style>
      </head>
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
