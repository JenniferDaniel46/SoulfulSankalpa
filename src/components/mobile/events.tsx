import { useContext } from "react";
import globalStyle from "../../app/global.module.css";
import style from "./events.module.css";
import { ScreenContext } from "@/app/layout";


export default function Events () {
  const screen = useContext(ScreenContext);
  return (
    <div className={`calendarNav ${globalStyle.screen}`} id={style.calendar}>
    Events
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FPhoenix&bgcolor=%23344734&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showDate=0&showNav=0&src=ZGFuaWVsbnByZWpzQGdtYWlsLmNvbQ&src=MGY5NDYzNzgyOTQwM2VhNWUyOThjMDM5N2Y5ZWY1Njc2OTZjNzFkNjYwZWVlYWVmOWRkNGQ1MDEzMGEwZjU3NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19qMW5laWdvNXNpa2wzMGtoMDRraDZtdW44c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23AD1457&color=%23795548&color=%23009688&color=%23C0CA33" style={{borderWidth:0}} width={screen.vw-10} height={screen.vh - 150}  scrolling="no"></iframe>
  </div>
  )
}