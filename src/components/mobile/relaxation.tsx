import Image from "next/image"
import YogaLotusSvg from "../yogaLotusSvg"
import globalStyle from '../../app/global.module.css';
import style from "./relaxation.module.css";

export default function Relaxation (props: {vh:number, vw:number, headerSize:number}) {

  return (
    <div className={globalStyle.screen} id={style.relaxation}>
    <Image
    alt="sound healing bowl"
    src={'/bowl.jpeg'}
    height={0}
    width={0}
    loading="lazy"
    sizes="{min-width: 1000px}"
    style={{height: "auto", width: props.vw}}
    />
    <div id={style.relaxationText}>
      Experience relaxation, stress relief, emotional balance with sound healing. Sound healing promotes inner peace. Creates harmony in the body, mind, and spirit through frequencies. Find healing, release, and inspiration for your well-being.
    </div>
    <div id={style.relaxationSvg}>
      <YogaLotusSvg color="white" fill="white" height={props.vh -(props.vw/.75) - props.headerSize - 10} width={props.vw - 10}/>
    </div>
  </div>
  )
}