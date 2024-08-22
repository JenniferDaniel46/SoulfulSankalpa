'use client'
import "./globals.css";
import { SwipeableDrawer } from "@mui/material";
import { useState, } from "react";
import React from "react";
import ContextProvider from "./context";


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
    const elems = document.getElementsByClassName(nav);
    const elem = elems[0];
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
            <button onClick={() => handleNav("cacaoNav")}>
            Cacao
            </button>
            <button onClick={() => handleNav("instaNav")}>
            Instagram
            </button>
            <button onClick={() => handleNav("messageNav")}>
            Connect
            </button>
            <button onClick={() => handleNav("calendarNav")}>
            Events
            </button>
          </div>
          </SwipeableDrawer>
          <ContextProvider>
            {children}
          </ContextProvider>
        </div>
      </body>

    </html>
  );
}
