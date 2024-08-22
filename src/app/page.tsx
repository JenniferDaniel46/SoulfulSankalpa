'use client'
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import YogaLotusSvg from "../components/yogaLotusSvg";
import ContactForm from "../components/contactForm";
import AquaticLotus from "@/components/aquaticLotus";
import LotusSvg from "@/components/lotus";
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
import { ScreenContext } from "./layout";

export default function Home() {
  const screen = useContext(ScreenContext);
  const headerSize = 50;
  // const [vw, setVw] = useState(700);
  // const [vh, setVh] = useState(700);
  // const [isMobile, setIsMobile] = useState(true);
  // const getWindowSize = () => {
  //   setVh(window.innerHeight);
  //   setVw(window.innerWidth);
  //   setIsMobile(window.innerWidth <= 768);
  // }
  // useEffect(() => {
  //   getWindowSize();
  // }, [])
  // useEffect(() => {
  //   window.addEventListener('resize', getWindowSize);
  //   return () => {
  //     window.removeEventListener('resize', getWindowSize);
  //   }
  // }, [vh, vw]);

  return (
    <>
    <div id={screen.isMobile ? "landing" : "landingDesk"} className="screen landing">
        <Image
        alt="Jenn Daniel meditating"
        src={'/Jenn-outdoors.jpeg'}
        height={0}
        width={0}
        priority={true}
        loading="eager"
        sizes="{max-height: 1000px, max-width: 1000px, min-height: calc(100vh - 400px)}"
        style={screen.isMobile ?
          {height: screen.vh-400, width: 'auto'} :
          {height: screen.vh*1.5, width: 'auto'}}
        />
    <div id="title">
      <h1>
        Soulful Sankalpa
      </h1>
      <h2>
        Jenn Daniel
      </h2>
    </div>
    <div id="landing-text">
    Connect with your true goals through Soulful Sankalpa&apos;s unique approach. Utilize yoga, sound therapy, and personalized guidance to align with your deepest desires. Embrace a fulfilling life in harmony with your beliefs. Start your transformative journey today.
    </div>
    </div>
    {screen.isMobile ? <SoulfulDef/> : <SoulfulExperience/>}
    {screen.isMobile ? <Relaxation headerSize={headerSize}/> : null}
    {screen.isMobile ? <CacaoMobile/> : <CacaoDesk/>}
    {screen.isMobile ? <Discover/>:<DiscoverDesk/>}
    {screen.isMobile ? <Essence/> : <EssenceInsta/>}
    {screen.isMobile ? <Instagram/> : <MessageEvents/>}
    {screen.isMobile ? <Connect/> :null}
    {screen.isMobile ? <Events/>: null}
    </>
  );
}
