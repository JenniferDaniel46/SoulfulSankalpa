import { InstagramEmbed } from "react-social-media-embed";
import AbstractLotus from "@/components/abstractLotus";
import globalStyle from "../../app/global.module.css";
import style from "./instagram.module.css";
import { useContext } from "react";
import { ScreenContext } from "@/app/context";

export default function Instagram() {
  const screen = useContext(ScreenContext);
  return (
    <div className={`instaNav ${globalStyle.screen}`} id={style.connect}>
      <h2>Discover your soulful journey</h2>
      <InstagramEmbed url="https://www.instagram.com/soulful_sankalpa/" width={screen.vw*.9} height={.9*screen.vh}/>
      {screen.vh > 700 ?
      <div className={globalStyle.w100} id={style.instaSVG}>
        <AbstractLotus color="white" fill="white" height={screen.vh *.2} width={screen.vw - 40}/>
      </div>
      :
      null}
    </div>
  )
}