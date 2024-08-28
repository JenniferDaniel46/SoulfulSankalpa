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
  if (screen.isMobile) {
    const style = mobileStyle;
  } else {
    const style = deskStyle;
  }
  return (
    <div>
      <h3>
        {props.chronSort ? props.offer.title : <div>
          <span>{props.offer.day}</span>
          <span>{props.offer.time}</span>
        </div>
        }
      </h3>
        {props.chronSort ? <div>
          <span>{props.offer.day}</span>
          <span>{props.offer.time}</span>
        </div> : null}
      <h4>
        {props.offer.name}
      </h4>
      <div>
        {props.offer.description}
      </div>
    </div>
  )
}