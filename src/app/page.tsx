'use client'
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { ScrollContext } from "./layout";
import YogaLotusSvg from "./components/yogaLotusSvg";

export default function Home() {
  const [vw, setVw] = useState(700);
  const [vh, setVh] = useState(700);
  const [isMobile, setIsMobile] = useState(true);
  const headerSize = 50;
  const getWindowSize = () => {
    console.log("inner: ", window.innerHeight)
    console.log("outer: ", window.outerHeight)
    setVh(window.outerHeight);
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
  }, [vh, vw])

  return (
    <div id="home" onScroll={useContext(ScrollContext)}>
    <div className="landing screen">
        <Image
        alt="Jenn Daniel meditating"
        src={'/Jenn-outdoors.jpeg'}
        height={0}
        width={0}
        priority={true}
        loading="eager"
        sizes="{max-width: 1000px}"
        style={{height: vh-400, width: 'auto'}}
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
    <div id="soulful-def-page" className="screen hp">
      <div id="soulful-def">
        <div id="soulful-def-title">
          Soulful Sankalpa
        </div>
        <div id="soulful-def-content">
          Using the tools of Yoga, the powerful plant medicine of Cacao and the healing frequencies of sound you will be guided to discover your Sankalpa.
          Sankalpa is a Sanskrit term that translates to &quot;intention&quot; or &quot;resolve.&quot; It is a deep understanding of one&apos;s true purpose or heartfelt desire. In the practice of yoga, discovering your Sankalpa is a powerful tool for aligning your thoughts, words, and actions with your highest self. By connecting to your Sankalpa, you can set a clear intention and manifest positive change in your life.
        </div>
      </div>
      <Image
      alt="group yoga session"
      src={'/image2.jpeg'}
      height={0}
      width={0}
      loading="lazy"
      sizes="{max-width: 1000px}"
      style={{height: "auto", width: vw + 60}}
      />
    </div>
    <div className="screen hp" id="relaxation">
      <Image
      alt="sound healing bowl"
      src={'/bowl.jpeg'}
      height={0}
      width={0}
      loading="lazy"
      sizes="{min-width: 1000px}"
      style={{height: "auto", width: vw}}
      />
      <div id="relaxationText">
        Experience relaxation, stress relief, emotional balance with sound healing. Sound healing promotes inner peace. Creates harmony in the body, mind, and spirit through frequencies. Find healing, release, and inspiration for your well-being.
      </div>
      <div id="relaxationSvg">
        <YogaLotusSvg color="white" fill="white" height={vh -(vw/.75) - headerSize - 10} width={vw - 10}/>
      </div>
    </div>
    <div className="screen hp" >
    </div>
    </div>
  );
}
