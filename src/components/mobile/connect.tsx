import ContactForm from "../contactForm"
import globalStyle from "../../app/global.module.css";
import style from "./connect.module.css";
import formStyle from "./contactForm.module.css";

export default function Connect () {
  return (
    <div className={`messageNav ${globalStyle.screen}`} id={style.sendMessage}>
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
          Jennifer.Daniel46@yahoo.com
        </span>
      </div>
    </div>
  )
}