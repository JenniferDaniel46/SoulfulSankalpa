import Image from "next/image"
import globalStyle from "../../app/global.module.css";
import style from "./discover.module.css";

export default function Discover (props: {vh:number, vw:number}) {
  return (
    <div className={globalStyle.screen} id={style.discoverPurpose}>
        <h2>Discover Your True Purpose</h2>
        <div id={style.discoverContent}>
          <Image
            src={'/Jenn-bowls-cropped.jpg'}
            alt="Jenn with sound bowls"
            width={props.vh / 6}
            height={props.vh / 6}
          />
          <div className={style.discoverText}>
            <span className={style.discoverTitle}>
              Private and Group Sound Baths
            </span>
            <span>
              Uncover the essence of your being through this transformative experience.
            </span>
          </div>
          <div className={style.discoverText}>
            <span className={style.discoverTitle}>
              Private and Group Cacao Ceremonies. Learn how to create your own ritual.
            </span>
            <span>
              Embark on a path of self-discovery with expert guidance.
            </span>
          </div>
          <Image
            src={'/Jenn-above.jpg'}
            alt="Jenn with cacao"
            height={props.vh / 6}
            width={props.vh / 6}
          />
          <Image
            src={'/Jenn-bending-cropped.JPEG'}
            alt="Jenn bending in yoga pose"
            height={props.vh / 6}
            width={props.vh / 6}
          />
          <div className={style.discoverText}>
            <span className={style.discoverTitle}>
            Nourish your soul with movement and Yoga Nidra Meditation. Private and group rates available.
            </span>
            <span>
            Align your mind, body, and spirit in harmony with the universe.
            </span>
          </div>
        </div>
      </div>
  )
}