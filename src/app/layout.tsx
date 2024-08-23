'use client'
import "./globals.css";
import React from "react";
import ContextProvider, { ScreenContext } from "./context";
import NavHeader from "./navHeader";


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
      <meta name="viewport" content="width=device-width inital-scale=1 maximum-scale=1 userScalable=0"/>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <div id="home">
          <ContextProvider>
            <NavHeader>
              {children}
            </NavHeader>
          </ContextProvider>
        </div>
      </body>

    </html>
  );
}
