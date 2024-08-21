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

export default function Home() {
  const [vw, setVw] = useState(700);
  const [vh, setVh] = useState(700);
  const [isMobile, setIsMobile] = useState(true);
  const headerSize = 50;
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

  return (
    <>
    <div id={isMobile ? "landing" : "landingDesk"} className="screen">
        <Image
        alt="Jenn Daniel meditating"
        src={'/Jenn-outdoors.jpeg'}
        height={0}
        width={0}
        priority={true}
        loading="eager"
        sizes="{max-height: 1000px, max-width: 1000px, min-height: calc(100vh - 400px)}"
        style={isMobile ?
          {height: vh-400, width: 'auto'} :
          {height: vh*1.5, width: 'auto'}}
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
    {isMobile ? <SoulfulDef vh={vh} vw={vw}/> : <SoulfulExperience vh={vh} vw={vw} />}

    {isMobile ?
    <Relaxation
      vh={vh}
      vw={vw}
      headerSize={headerSize}
    /> : null}
    {isMobile ?
    <CacaoMobile
      vh={vh}
      vw={vw}
    /> :
    <CacaoDesk
    vh={vh}
    vw={vw}/>}
    {isMobile ?
    <Discover
    vh={vh}
    vw={vw}/>:
    <DiscoverDesk
    vh={vh}
    vw={vw}
    />}
    {isMobile ? <Essence
    vh={vh}
    vw={vw}
    /> : null}
    {isMobile ? <Instagram
    vh={vh}
    vw={vw}
    /> : null}
    {isMobile ? <Connect
    vh={vh}
    vw={vw}
    /> :null}
    {isMobile ? <Events
    vh={vh}
    vw={vw}
    />: null}

    </>
  );
}
