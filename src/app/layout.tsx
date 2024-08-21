'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import React from "react";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open: boolean) => {
    setDrawer(open);
  }
  const handleNav = (nav: string) => {
    const elem = document.getElementById(nav);
    elem?.scrollIntoView(true);
    toggleDrawer(false);

  }
  return (
    <html lang="en">
      <title>Soulful Sankalpa</title>
      <meta name="keywords" content="yoga soulful sankalpa cacao sound healing relaxation purpose bath essence Jenn Daniel"/>
      <meta name="description" content="Jenn Daniel Website"/>
      <meta name="viewport" content="width=device-width inital-scale=1 maximum-scale=1 userScalable=0 "/>
      <body>
        <div id="home">
        <div id="header">
          <span>
          </span>
          <span id="header-title" onClick={() => handleNav("landing")}>
          Soulful Sankalpa
          </span>
          <span id="header-menu" onClick={() => toggleDrawer(true)}>
            menu
          </span>
        </div>
        <SwipeableDrawer
        anchor="right"
        open={drawer}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        >
          <div id="drawer">
          <button onClick={() => handleNav("landing")}>
          Home
          </button>
          <button onClick={() => handleNav("cacao")}>
          Cacao
          </button>
          <button onClick={() => handleNav("connect")}>
          Instagram
          </button>
          <button onClick={() => handleNav("sendMessage")}>
          Connect
          </button>
          <button onClick={() => handleNav("calendar")}>
          Events
          </button>
          </div>
        </SwipeableDrawer>
        {children}
        </div>
      </body>
    </html>
  );
}
