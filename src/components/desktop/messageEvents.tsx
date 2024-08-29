import ContactForm from "../contactForm";
import globalStyle from '../../app/global.module.css';
import style from './messageEvents.module.css';
import formStyle from './contactForm.module.css';
import LotusSvg from "../lotus";
import AbstractLotus from "../abstractLotus";
import TripleLotus from "../tripleLotus";
import { useContext } from "react";
import { ScreenContext } from "@/app/context";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function MessageEvents () {
  const screen = useContext(ScreenContext);
  return (
    <div  className={`${style.messageEvents} ${globalStyle.screen}`} id="messageEvents">
      <div className={globalStyle.h100} id={style.sendMessage}>
        <h3>Connect with Soulful Sankalpa</h3>
        <div>
        Are you open to explore the transformative path together? Share a bit about yourself, and we will reach out with purpose. Eagerly awaiting your message!
        </div>
        <ContactForm style={formStyle}/>
        <div id={style.messageFooter}>
          <span>
            Jenn Daniel
          </span>
          <span>
            <a href="mailto: jennifer.daniel46@yahoo.com">
              Jennifer.Daniel46@yahoo.com
            </a>
          </span>
        </div>
      </div>
      <div className={globalStyle.bgGreen} id={style.divider}>
        <TripleLotus fill="white" height={screen.vh} width={screen.vw * .4} />
      </div>
      <div id={style.events} className={globalStyle.h100}>
        Events
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ZTMyZTY5MGNmZDAyNGNlODcwYjVlNzI4YTJjNGVhYTJkN2MwMmM3Mjc2MDg2NDQ3YzgyYTZkMWU1NDg5MTBkYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5" style={{borderWidth:0}} width={screen.vw *.35} height={screen.vh - 280}  scrolling="no"></iframe>
        <div id={style.credits}>
          <span>
            Website designed and created by Daniel Prejs
          </span>
          <span id={style.creditIcons}>
            <a href="mailto: danielnprejs@gmail.com">
              <EmailIcon />
            </a>
            <a href="https://www.linkedin.com/in/daniel-prejs">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/dprejs">
              <GitHubIcon />
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}