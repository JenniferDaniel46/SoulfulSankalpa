import Image from "next/image"
import globalStyle from "../../app/global.module.css";
import style from "./discover.module.css";
import { useContext } from "react";
import { ScreenContext } from "@/app/context";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Discover() {
  const screen = useContext(ScreenContext);
  const handleArrow = (direction: "left"|"right") => {
    const elem =  document.getElementById(style.discoverContent)
    if (direction === "left") {
      if (elem) {
        elem?.scroll({left: elem.scrollLeft-screen.vw})
      }
    } else {
      elem?.scroll({left: elem.scrollLeft + screen.vw})
    }
  }
  return (
    <div
      className={globalStyle.screen}
      id={style.discoverPurpose}
    >
      <h2>Discover Your True Purpose</h2>
      <div id={style.discoverContent}>
        <div className={style.discoverText}>
          <span className={style.discoverTitle}>
            Private and Group Sound Baths
          </span>
          <Image
            src={'/Jenn-bowls-cropped.jpg'}
            alt="Jenn playing Chakra bowl set of frosted crystal bowls"
            width={screen.vh / 3}
            height={screen.vh / 3}
          />
          <span>
            Sound healing and sound baths utilize specific frequencies and vibrations to promote relaxation, reduce stress, and enhance overall well-being. During a sound bath, participants are enveloped in sound from instruments. This auditory experience can help balance energy, improve mood, and facilitate deeper meditation. The healing properties stem from the way sound affects the body and mind: it can lower heart rate, decrease anxiety, and promote emotional release. The vibrations can also help clear blockages in energy flow, fostering a sense of harmony and connection. Overall, sound healing is seen as a gentle, non-invasive way to support physical, emotional, and spiritual healing.
          </span>
        </div>
        <div className={style.discoverText}>
          <span className={style.discoverTitle}>
            Private and Group Cacao Ceremonies. Learn how to create your own ritual.
          </span>
          <Image
            src={'/Jenn-above.jpg'}
            alt="Jenn sitting with mug of cacao"
            height={screen.vh / 4}
            width={screen.vh / 4}
          />
          <span>
            Cacao ceremonies involve the ceremonial use of cacao, often in a raw, unprocessed form, to promote connection, healing, and community. Traditionally rooted in Mesoamerican cultures, these ceremonies typically include preparing cacao as a warm beverage and consuming it in a mindful, intentional setting.The benefits of cacao ceremonies include: emotional healing, heart opening, mindfulness, creativity and community building. Overall, cacao ceremonies offer a unique blend of physical, emotional, and spiritual benefits, fostering a deeper connection to oneself and the community.
          </span>
        </div>
        <div className={style.discoverText}>
          <span className={style.discoverTitle}>
            Nourish your soul with movement and Yoga Nidra Meditation. Private and group rates available.
          </span>
          <Image
            src={'/Jenn-bending-cropped.JPEG'}
            alt="Jenn in Camatkarasana or Wild Thing Pos"
            height={screen.vh / 3.5}
            width={screen.vh / 3.5}
          />
          <span>
            Yoga offers a wide range of benefits for both physical and mental well-being such as: improved flexibility, increased strength, better posture, stress relief, enhanced balance, and fosters a deeper awareness of the body and mind, promoting self-acceptance. Yoga Nidra meditation can assist with deep relaxation, improved sleep, mental clarity, emotional healing, body awareness, enhanced creativity, restoration and recovery. Overall, Yoga Nidra serves as a powerful tool for relaxation, self-discovery, and holistic healing. These practices create a holistic approach to health, enhancing physical fitness and mental clarity while promoting overall well-being.
          </span>
        </div>
      </div>
      <span  className={style.arrows}>
        <div onClick={() => handleArrow("left")}>
          <KeyboardArrowLeftIcon  sx={{width: 60, height: 60}}/>
        </div>
        <div onClick={() => handleArrow("right")}>
          <KeyboardArrowRightIcon sx={{width: 60, height: 60}}/>
        </div>
      </span>
    </div>
  )
}
