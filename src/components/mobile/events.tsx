import { useContext } from "react";
import globalStyle from "../../app/global.module.css";
import style from "./events.module.css";
import { ScreenContext } from "@/app/context";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Events () {
  const screen = useContext(ScreenContext);
  return (
    <div className={`${globalStyle.screen} ${style.calendar}`} id={"events"}>
      Events
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ZTMyZTY5MGNmZDAyNGNlODcwYjVlNzI4YTJjNGVhYTJkN2MwMmM3Mjc2MDg2NDQ3YzgyYTZkMWU1NDg5MTBkYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5" style={{borderWidth:0}} width={screen.vw-10} height={screen.vh - 170}  scrolling="no"></iframe>
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
  )
}