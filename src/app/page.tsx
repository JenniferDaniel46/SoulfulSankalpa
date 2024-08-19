'use client'
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import YogaLotusSvg from "./components/yogaLotusSvg";
import ContactForm from "./components/contactForm";
import { InstagramEmbed } from "react-social-media-embed";

export default function Home() {
  const [vw, setVw] = useState(700);
  const [vh, setVh] = useState(700);
  const [isMobile, setIsMobile] = useState(true);
  const headerSize = 50;
  const getWindowSize = () => {
    setVh(window.innerHeight);
    setVw(window.innerWidth);
    setIsMobile(window.innerWidth <= 768);
  }
  useEffect(() => {
    getWindowSize();
  }, [])
  useEffect(() => {
    window.addEventListener('resize', getWindowSize);
    return () => {
      window.removeEventListener('resize', getWindowSize);
    }
  }, [vh, vw])

  return (
    <>
    <div className="landing screen ">
        <Image
        alt="Jenn Daniel meditating"
        src={'/Jenn-outdoors.jpeg'}
        height={0}
        width={0}
        priority={true}
        loading="eager"
        sizes="{max-width: 1000px}"
        style={{height: vh-400, width: 'auto'}}
        />
    <div id="title">
      <h1>
        Soulful Sankalpa
      </h1>
      <h2>
        Jenn Daniel
      </h2>
    </div>
    <div id="landing-text">
    Connect with your true goals through Soulful Sankalpa&apos;s unique approach. Utilize yoga, sound therapy, and personalized guidance to align with your deepest desires. Embrace a fulfilling life in harmony with your beliefs. Start your transformative journey today.
    </div>
    </div>
    <div id="soulful-def-page" className="screen hp">
      <div id="soulful-def">
        <div id="soulful-def-title">
          Soulful Sankalpa
        </div>
        <div id="soulful-def-content">
          Using the tools of Yoga, the powerful plant medicine of Cacao and the healing frequencies of sound you will be guided to discover your Sankalpa.
          Sankalpa is a Sanskrit term that translates to &quot;intention&quot; or &quot;resolve.&quot; It is a deep understanding of one&apos;s true purpose or heartfelt desire. In the practice of yoga, discovering your Sankalpa is a powerful tool for aligning your thoughts, words, and actions with your highest self. By connecting to your Sankalpa, you can set a clear intention and manifest positive change in your life.
        </div>
      </div>
      <Image
      alt="group yoga session"
      src={'/image2.jpeg'}
      height={0}
      width={0}
      loading="lazy"
      sizes="{max-width: 1000px}"
      style={{height: "auto", width: vw + 60}}
      />
    </div>
    <div className="screen hp" id="relaxation">
      <Image
      alt="sound healing bowl"
      src={'/bowl.jpeg'}
      height={0}
      width={0}
      loading="lazy"
      sizes="{min-width: 1000px}"
      style={{height: "auto", width: vw}}
      />
      <div id="relaxationText">
        Experience relaxation, stress relief, emotional balance with sound healing. Sound healing promotes inner peace. Creates harmony in the body, mind, and spirit through frequencies. Find healing, release, and inspiration for your well-being.
      </div>
      <div id="relaxationSvg">
        <YogaLotusSvg color="white" fill="white" height={vh -(vw/.75) - headerSize - 10} width={vw - 10}/>
      </div>
    </div>
    <div className="screen hp" id="cacao">
      <div id="cacaoText">
        <span>
        Cacao, the purest form of chocolate, is packed with antioxidants that help reduce inflammation and improve heart health. It is rich in minerals such as magnesium, iron, and calcium, which are essential for various bodily functions. Cacao is known to boost mood by increasing serotonin levels in the brain, promoting a sense of well-being. Additionally, its natural compounds can enhance focus and cognitive function. Consuming cacao in moderation can be a delicious way to reap these health benefits and indulge in a guilt-free treat. The spiritual benefits of this plant medicine help us to connect to our intuition, higher self and opens our heart to discover our true desires and purpose. All cacao used in ceremonies is sourced from Cacaoandi.
        </span>
        <span>
       Use code Jennben15 for a discount when you purchase directly from their site.
        </span>
      </div>
      <Image
        src={"/cacao/pouring.jpeg"}
        alt="cacao"
        height={0}
        width={0}
        loading="lazy"
        sizes="{max-width: 10000px}"
        style={{height: vh-400, width: 'auto'}}
      />
      <button>Purchase <br/>from <br/>Cacaoandi</button>
      </div>
      <div className="screen hp" id="discoverPurpose">
        <h2>Discover Your True Purpose</h2>
        <div id="discoverContent">
          <Image
            src={'/Jenn-bowls-cropped.jpg'}
            alt="Jenn with sound bowls"
            width={vh / 6}
            height={vh / 6}
          />
          <div className="discoverText">
            <span className="discoverTitle">
              Private and Group Sound Baths
            </span>
            <span>
              Uncover the essence of your being through this transformative experience.
            </span>
          </div>
          <div className="discoverText">
            <span className="discoverTitle">
              Private and Group Cacao Ceremonies. Learn how to create your own ritual.
            </span>
            <span>
              Embark on a path of self-discovery with expert guidance.
            </span>
          </div>
          <Image
            src={'/Jenn-above.jpg'}
            alt="Jenn with cacao"
            height={vh / 6}
            width={vh / 6}
          />
          <Image
            src={'/Jenn-bending-cropped.JPEG'}
            alt="Jenn bending in yoga pose"
            height={vh / 6}
            width={vh / 6}
          />
          <div className="discoverText">
            <span className="discoverTitle">
            Nourish your soul with movement and Yoga Nidra Meditation. Private and group rates available.
            </span>
            <span>
            Align your mind, body, and spirit in harmony with the universe.
            </span>
          </div>
        </div>
      </div>
      <div className="screen hp" id="essenceWithin">
        <div id="essenceText">
        <h2>Unveiling the essence within</h2>
        <span>
        Embark on a transformative journey to align with your soul&apos;s purpose, uncovering the path to inner peace and fulfillment. Embrace the power of self-discovery through the ancient wisdom of yoga, powerful rituals with Cacao and the healing benefit of sound frequency.
        </span>
        </div>
        <Image
        src={'/bowls-cropped.JPEG'}
        alt="sound bath bowls"
        height={0}
        width={0}
        sizes="{max-width: 1000px}"
        style={{height: 'auto', width: vw}}
        />
      </div>
      <div className="screen hp" id="connect">
        <h2>Discover your soulful journey</h2>
        <InstagramEmbed url="https://www.instagram.com/soulful_sankalpa/" width={vw * .8}/>
        <h3>Connect with Soulful Sankalpa</h3>
        <div>
        Are you open to explore the transformative path together? Share a bit about yourself, and we will reach out with purpose. Eagerly awaiting your message!
        </div>
        <ContactForm />
      </div>
    </>
  );
}
