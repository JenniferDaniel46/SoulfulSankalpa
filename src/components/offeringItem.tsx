import { ScreenContext } from "@/app/context"
import { useContext } from "react"
import mobileStyle from "./mobile/offerings.module.css";
import deskStyle from  "./desktop/offerings.module.css";


export default function OfferingItem (props: {offer: {
  title: string,
  address: string,
  url: string,
  name: string,
  description: string,
  day: string,
  time: string,
},
chronSort: boolean,
}){
  const screen = useContext(ScreenContext);
  let style;
  if (screen.isMobile) {
    style = mobileStyle;
  } else {
    style = deskStyle;
  }
  return (
    <div className={style.offerItem}>
      <h3>
        {props.chronSort ? <a href={props.offer.url}>{props.offer.title}</a> : <div className={style.time}>
          <span>{props.offer.day}</span>
          <span>{props.offer.time}</span>
        </div>
        }
      </h3>
        {props.chronSort ? <div className={style.time}>
          <span>{props.offer.day}</span>
          <span>{props.offer.time}</span>
        </div> : null}
      <h4>
        {props.offer.name}
      </h4>
      <div className={style.description}>
        {props.offer.description}
      </div>
    </div>
  )
}