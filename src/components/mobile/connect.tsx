import ContactForm from "../contactForm"
import globalStyle from "../../app/global.module.css";
import style from "./connect.module.css";
import formStyle from "./contactForm.module.css";

export default function Connect () {
  return (
    <div
      className={`messageNav ${style.sendMessage} ${globalStyle.screen}`}
      id="sendMessage"
    >
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
  )
}