'use client'
import { useContext } from "react";
import SoulfulDef from "@/components/mobile/soulfulDef";
import SoulfulExperience from "@/components/desktop/soulfulExperience";
import Relaxation from "@/components/mobile/relaxation";
import CacaoMobile from "@/components/mobile/cacao";
import CacaoDesk from "@/components/desktop/cacao";
import Discover from "@/components/mobile/discover";
import DiscoverDesk from "@/components/desktop/discover";
import Essence from "@/components/mobile/essence";
import Instagram from "@/components/mobile/instagram";
import Connect from "@/components/mobile/connect";
import Events from "@/components/mobile/events";
import EssenceInsta from "@/components/desktop/essenceInsta";
import MessageEvents from "@/components/desktop/messageEvents";
import { ScreenContext } from "./context";
import LanidngMobile from "@/components/mobile/landing";
import LandingDesk from "@/components/desktop/landing";
import MobileOfferings from "@/components/mobile/offerings";
import DeskOfferings from "@/components/desktop/offerings";

export default function Home() {
  const screen = useContext(ScreenContext);
  const headerSize = 50;
  return (
    <>
    {screen.isMobile ? <LanidngMobile /> : <LandingDesk />}
    {screen.isMobile ? <SoulfulDef/> : <SoulfulExperience/>}
    {screen.isMobile ? <Relaxation headerSize={headerSize}/> : null}
    {screen.isMobile ? <CacaoMobile/> : <CacaoDesk/>}
    {screen.isMobile ? <Discover/>:<DiscoverDesk/>}
    {screen.isMobile ? <Essence/> : <EssenceInsta/>}
    {screen.isMobile ? <Instagram/> : <DeskOfferings/>}
    {screen.isMobile ? <Connect/> : <MessageEvents/>}
    {screen.isMobile ? <MobileOfferings /> : null}
    {screen.isMobile ? <Events/>: null}
    </>
  );
}
