import ContactForm from "../contactForm";
import globalStyle from '../../app/global.module.css';
import style from './messageEvents.module.css';
import formStyle from './contactForm.module.css';
import LotusSvg from "../lotus";
import AbstractLotus from "../abstractLotus";
import TripleLotus from "../tripleLotus";
import { useContext } from "react";
import { ScreenContext } from "@/app/layout";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function MessageEvents () {
  const screen = useContext(ScreenContext);
  return (
    <div  className={`calendarNav messageNav ${globalStyle.screen}`} id={style.messageEvents}>
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
        {/* <AbstractLotus fill="white" width={screen.vw * .18} height={screen.vh * .5 - 50}/>
        <LotusSvg fill="white" width={screen.vw * .18} height={screen.vh * .5 - 50}/> */}
        <TripleLotus fill="white" height={screen.vh} width={screen.vw * .4} />
      </div>
      <div id={style.events} className={globalStyle.h100}>
        Events
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FPhoenix&bgcolor=%23344734&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showDate=0&showNav=0&src=ZGFuaWVsbnByZWpzQGdtYWlsLmNvbQ&src=MGY5NDYzNzgyOTQwM2VhNWUyOThjMDM5N2Y5ZWY1Njc2OTZjNzFkNjYwZWVlYWVmOWRkNGQ1MDEzMGEwZjU3NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19qMW5laWdvNXNpa2wzMGtoMDRraDZtdW44c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23AD1457&color=%23795548&color=%23009688&color=%23C0CA33" style={{borderWidth:0}} width={screen.vw *.35} height={screen.vh - 280}  scrolling="no"></iframe>
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