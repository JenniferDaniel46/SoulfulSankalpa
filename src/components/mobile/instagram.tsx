import { InstagramEmbed } from "react-social-media-embed";
import AbstractLotus from "@/components/abstractLotus";
import globalStyle from "../../app/global.module.css";
import style from "./instagram.module.css";

export default function Instagram(props: {vh:number, vw:number}) {
  return (
<div className={globalStyle.screen} id={style.connect}>
        <h2>Discover your soulful journey</h2>
        <InstagramEmbed url="https://www.instagram.com/soulful_sankalpa/" width={props.vw*.9} height={.9*props.vh}/>
        {props.vh > 700 ? <div className=" w-100" id={style.instaSVG}>
          <AbstractLotus color="white" fill="white" height={props.vh *.2} width={props.vw - 40}/>
        </div> : null}

      </div>
  )
}