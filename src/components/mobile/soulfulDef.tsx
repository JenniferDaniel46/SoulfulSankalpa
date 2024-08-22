import Image from "next/image"
import globalStyle from '../../app/global.module.css';
import style from "./soulfulDef.module.css";
import { useContext } from "react";
import { ScreenContext } from "@/app/layout";

export default function SoulfulDef() {
  const screen = useContext(ScreenContext);
  return(
    <div id={style.soulfulDefPage} className={globalStyle.screen}>
    <div id={style.soulfulDef}>
        <div id={style.soulfulDefTitle}>
          Soulful Sankalpa
        </div>
        <div id={style.soulfulDefContent}>
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
      style={{height: "auto", width: screen.vw + 60}}
      />
    </div>
  )
}