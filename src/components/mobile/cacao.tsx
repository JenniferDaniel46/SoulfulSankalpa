import Image from "next/image"
import globalStyle from "../../app/global.module.css";
import style from "./cacao.module.css";
import { useContext } from "react";
import { ScreenContext } from "@/app/layout";

export default function CacaoMobile () {
  const screen = useContext(ScreenContext);
  return (
    <div
      className={`cacaoNav ${globalStyle.screen}`}
      id={style.cacao}
    >
      <div id={style.cacaoText}>
        <span>
          Cacao, the purest form of chocolate, is packed with antioxidants that help reduce inflammation and improve heart health. It is rich in minerals such as magnesium, iron, and calcium, which are essential for various bodily functions. Cacao is known to boost mood by increasing serotonin levels in the brain, promoting a sense of well-being. Additionally, its natural compounds can enhance focus and cognitive function. Consuming cacao in moderation can be a delicious way to reap these health benefits and indulge in a guilt-free treat. The spiritual benefits of this plant medicine help us to connect to our intuition, higher self and opens our heart to discover our true desires and purpose. All cacao used in ceremonies is sourced from Cacaoandi.
        </span>
        <span>
          Use code
          <span className={globalStyle.underline}>
            Jennben15
          </span>
          for a discount when you purchase directly from their site.
        </span>
      </div>
      <Image
        src={"/cacao/pouring.jpeg"}
        alt="cacao"
        height={0}
        width={0}
        loading="lazy"
        sizes="{max-width: 10000px}"
        style={{height: screen.vh-400, width: 'auto'}}
      />
      <a href="https://www.cacaoandi.com/">
        Purchase <br/>from <br/>Cacaoandi
      </a>
      </div>
  )
}