import Image from "next/image"
import TripleLotus from "../tripleLotus"
import { InstagramEmbed } from "react-social-media-embed"
import globalStyle from "../../app/global.module.css";
import style from "./essenceInsta.module.css";
import { useContext } from "react";
import { ScreenContext } from "@/app/context";


export default function EssenceInsta (){
  const screen = useContext(ScreenContext);
  return (
    <div className={`instaNav ${style.essenceInsta} ${globalStyle.screen}`} id="essenceInsta">
      <div id={style.essence}>
        <h2>Unveiling the essence within</h2>
        <span>
          Embark on a transformative journey to align with your soul&apos;s purpose, uncovering the path to inner peace and fulfillment. Embrace the power of self-discovery through the ancient wisdom of yoga, powerful rituals with Cacao and the healing benefit of sound frequency.
        </span>
        <Image
          src={'/bowls-cropped.JPEG'}
          alt="Chakra bowl set of frosted crystal bowls set up to play"
          height={0}
          width={0}
          sizes="{max-width: 1000px}"
          style={{height: 'auto', width: screen.vw}}
        />
        </div>
        <div
          className={`${globalStyle.bgGreen}
          ${globalStyle.h100}`}
          id={style.svg}
        >
          <TripleLotus fill="white" width={screen.vw*.4} />
        </div>
        <div className={globalStyle.h100} id={style.insta}>
          <h2>Discover your soulful journey</h2>
          <InstagramEmbed url="https://www.instagram.com/soulful_sankalpa/" width={screen.vw*.45}/>
        </div>
    </div>

  )
}