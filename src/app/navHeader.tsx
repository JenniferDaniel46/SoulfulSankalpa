import { useContext, useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import Link from "next/link";
import { ScreenContext } from "./context";

export default function NavHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const screen = useContext(ScreenContext);
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open: boolean) => {
    setDrawer(open);
  }
  return (
    <>

    <div id="header">
    <span>
    </span>
    <Link id="header-title" href={'/#landing'}>
    Soulful Sankalpa
    </Link>
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
      <Link href={"/#landing"}>
        Home
      </Link>
      <Link href="/#cacao" >
      Cacao
      </Link>
      <Link href={screen.isMobile ? '/#insta' : '/#essenceInsta'}>
        Instagram
      </Link>
      <Link href={screen.isMobile ? "/#sendMessage" : "/#messageEvents"}>
        Connect
      </Link>
      <Link
      href={screen.isMobile ? "/#events" : "/#messageEvents"}
      scroll={true}>
        Events
      </Link>
      <Link href={'/blog'}>
        Blog
      </Link>
    </div>
    </SwipeableDrawer>
    {children}
    </>
  )
}