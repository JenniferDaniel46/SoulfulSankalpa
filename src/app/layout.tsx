'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Soulful Sankalpa</title>
      <meta name="keywords" content="yoga soulful sankalpa cacao sound healing relaxation purpose bath essence Jenn Daniel"/>
      <meta name="description" content="Jenn Daniel Website"/>
      <meta name="viewport" content="width=device-width inital-scale=1 maximum-scale=1 userScalable=0 "/>
      <body>
        <div id="home">

        <div id="header"

>
          <span>

          </span>
          <span id="header-title">
          Soulful Sankalpa
          </span>
          <span id="header-menu">
            menu
          </span>
        </div>
        {children}
        </div>
      </body>
    </html>
  );
}
