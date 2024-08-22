'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SwipeableDrawer } from "@mui/material";
import { useState, useEffect, createContext } from "react";
import React from "react";


export const ScreenContext = createContext({vw: 700, vh:700, isMobile: true});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [vw, setVw] = useState(700);
  const [vh, setVh] = useState(700);
  const [isMobile, setIsMobile] = useState(true);
  const getWindowSize = () => {
    setVh(window.innerHeight);
    setVw(window.innerWidth);
    setIsMobile(window.innerWidth <= 768);
  }
  useEffect(() => {
    getWindowSize();
  }, [])
  useEffect(() => {
    window.addEventListener('resize', getWindowSize);
    return () => {
      window.removeEventListener('resize', getWindowSize);
    }
  }, [vh, vw]);

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
        <ScreenContext.Provider value={{vh:vh, vw:vw, isMobile:isMobile}}>
          {children}
        </ScreenContext.Provider>
        </div>
      </body>
    </html>
  );
}
