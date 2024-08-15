'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });

export const ScrollContext = createContext(()=>{})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(pathname === '/');

  const handleScroll = () => {
    const position = document.getElementById("home")?.scrollTop;
    if (pathname === "/" &&  position && position < 50) {
      setHideHeader(true)
    } else if (position && position > 50)  {
      setHideHeader(false)
    }
  };
  return (
    <html lang="en">
      <title>Soulful Sankalpa</title>
      <meta name="keywords" content="yoga soulful sankalpa cacao sound healing relaxation purpose bath essence Jenn Daniel"/>
      <meta name="description" content="Jenn Daniel Website"/>
      <meta name="viewport" content="width=device-width inital-scale=1 maximum-scale=1 userScalable=0 "/>
      <body className={inter.className}>
        {hideHeader ?
        null
        :
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
        }
        <ScrollContext.Provider value={handleScroll} >
        {children}
        </ScrollContext.Provider>
      </body>
    </html>
  );
}
