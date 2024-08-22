import TripleLotus from "../tripleLotus";
import Image from "next/image";
import globalStyle from '../../app/global.module.css';
import style from "./soulfulExperience.module.css";
import { useContext } from "react";
import { ScreenContext } from "@/app/layout";

export default function SoulfulExperience() {
  const screen = useContext(ScreenContext);
  return (
    <div id={style.soulfulExp} className={globalStyle.screen}>
      <div id={style.soulfulDefDesk} className={globalStyle.h100}>
        <h2>Soulful Sankalpa</h2>
        <div>
          Using the tools of Yoga, the powerful plant medicine of Cacao and the healing frequencies of sound you will be guided to discover your Sankalpa.
          Sankalpa is a Sanskrit term that translates to &quot;intention&quot; or &quot;resolve.&quot; It is a deep understanding of one&apos;s true purpose or heartfelt desire. In the practice of yoga, discovering your Sankalpa is a powerful tool for aligning your thoughts, words, and actions with your highest self. By connecting to your Sankalpa, you can set a clear intention and manifest positive change in your life.
        </div>
        <Image
          alt="group yoga session"
          src={'/image2.jpeg'}
          height={0}
          width={0}
          loading="lazy"
          sizes="{max-width: 40vw}"
          style={{ height: "auto", width: screen.vw * .35 }}
        />
      </div>
      <div id={style.soulfulSVG} className={`${globalStyle.h100} ${globalStyle.bgGreen}`}>
        <TripleLotus fill="white" height={screen.vh} width={screen.vw * .4} />
      </div>
      <div id={style.experience} className={globalStyle.h100}>
        <Image
          alt="sound healing bowl"
          src={'/bowl.jpeg'}
          height={0}
          width={0}
          loading="lazy"
          sizes="{min-width: 40vw, min-height: 100vh}"
          style={{ height: screen.vh, width: screen.vw * .4 }}
        />
        <div id={style.expTextGrid} className={`${globalStyle.h100} ${globalStyle.dimBackground}`}>
          <div id={style.expText} >
              Experience relaxation, stress relief, emotional balance with sound healing. Sound healing promotes inner peace. Creates harmony in the body, mind, and spirit through frequencies. Find healing, release, and inspiration for your well-being.
          </div>
        </div>
      </div>
    </div>
  )
}