import Image from "next/image"
import YogaLotusSvg from "../yogaLotusSvg"
import globalStyle from '../../app/global.module.css';
import style from "./relaxation.module.css";
import { useContext } from "react";
import { ScreenContext } from "@/app/context";

export default function Relaxation (props:{headerSize:number}) {
  const screen = useContext(ScreenContext);
  return (
    <div className={globalStyle.screen} id={style.relaxation}>
      <Image
        alt="Jenn playing frosted crystal Chakra bowl"
        src={'/bowl.jpeg'}
        height={0}
        width={0}
        loading="lazy"
        sizes="{min-width: 1000px}"
        style={{height: "auto", width: screen.vw}}
      />
      <div id={style.relaxationText}>
        Experience relaxation, stress relief, emotional balance with sound healing. Sound healing promotes inner peace. Creates harmony in the body, mind, and spirit through frequencies. Find healing, release, and inspiration for your well-being.
      </div>
      <div id={style.relaxationSvg}>
        <YogaLotusSvg color="white" fill="white" height={screen.vh -(screen.vw/.75) - props.headerSize - 10} width={screen.vw - 10}/>
      </div>
    </div>
  )
}