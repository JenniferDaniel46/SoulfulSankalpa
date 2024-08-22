import Image from "next/image"
import globalStyle from "../../app/global.module.css";
import style from "./essence.module.css";
import { useContext } from "react";
import { ScreenContext } from "@/app/context";


export default function Essence () {
  const screen = useContext(ScreenContext);
  return(
    <div
      className={globalStyle.screen}
      id={style.essenceWithin}
    >
      <div id={style.essenceText}>
        <h2>Unveiling the essence within</h2>
        <span>
          Embark on a transformative journey to align with your soul&apos;s purpose, uncovering the path to inner peace and fulfillment. Embrace the power of self-discovery through the ancient wisdom of yoga, powerful rituals with Cacao and the healing benefit of sound frequency.
        </span>
      </div>
      <Image
        src={'/bowls-cropped.JPEG'}
        alt="sound bath bowls"
        height={0}
        width={0}
        sizes="{max-width: 1000px}"
        style={{height: 'auto', width: screen.vw}}
      />
    </div>
  )
}