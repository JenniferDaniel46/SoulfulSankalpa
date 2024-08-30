import globalStyle from '../../app/global.module.css';
import style from './testimonials.module.css';

export default function MobileTestimonials() {

  return (
    <div id="testimonials"
      className={`${style.testimonialsPage} ${globalStyle.screen}`}>
      <h2>Testimonials</h2>
      <div className={style.testimonials}>

        <div className={style.testimonial}>
          <span>
            Jenn Daniel was my mentor when we met in 200hr yoga teacher training in 2023
            at yoga pura. She proved to be dedicated, encouraging, and inspiring even when it
            was difficult to believe in myself. A year later as I find myself starting a path of
            teaching, I find I still have a mentor, instructor, counselor, and friend who has only
            ever wanted me to succeed.
            <br/> <br/>
            It is clear to me that Jenn has chosen a path of inspiring growth in service to
            others. She has been sound counsel and helpful instruction regardless of where my
            path flows. If anyone is looking for a true professional who actually cares Ms. Daniel
            is a great place to start.
          </span>
          <span>
            — Matthew B
          </span>
        </div>
        <div className={style.testimonial}>
          <span>
            Jenn was absolutely AMAZING. Her presence was so calming and warm and she
            was the perfect combination of professional and personal, which is tough to achieve
            when you&#39;re working so closely with people&#39;s feelings and emotions. The cacao
            ceremony is something I&#39;ve never experienced before and it was SUCH a positive
            experience for me, I can&#39;t wait to do another. Jenn has a gift for putting others at
            ease the second she enters a room and is so skilled at what she does. I&#39;ll be calling
            her for every sound bath and cacao ceremony I ever do from here on out! Thank
            you so much for your expertise, Jenn!!
          </span>
          <span>
            — Alyssa B
          </span>
        </div>
        <div className={style.testimonial}>
          <span>
            Jenn is someone you meet and immediately feel comfortable with. Her presence is
            light and warm, calming and safe. I have experienced 2 cacao ceremonies with Jenn
            and continue to feel even more inspired and supported. This was my first sound
            bath with Jenn, and it put me in another dimension, in the best way possible. Thank
            you thank you thank you Jenn!!!
          </span>
          <span>
            — Jamie B
          </span>
        </div>
        <div className={style.testimonial}>
          <span>
            Jen was incredible as our yoga instructor, leading us through a private cacao
            ceremony and a sound bath ceremony. Her expertise and calming presence made
            the experience unforgettable for all of us. She created a serene and uplifting
            atmosphere that was perfect for our group. We couldn&#39;t have asked for a better
            guide for our special day!
          </span>
          <span>
            — Brooke B
          </span>
        </div>
        <div className={style.testimonial}>
          <span>
            My name is Kristen and I struggle with anger, I have my whole life from childhood
            trauma. When I became a mother, my struggles intensified. I was easily triggered
            and was in a constant state of reaction that I knew was affecting my children. I
            began a desperate search to find tools to help me break the cycles that were
            devastating my relationships and destroying my sense of worth as a mother.
            <br/><br/>
            In January I attended Jenn’s cacao ceremony and it introduced me to mother cacao.
            Jenn’s beautiful description of her ancient medicine and spirit resonated with me
            deeply. I felt her warmth wrap around my heart as I inhaled her aroma for the first
            time. It began a heart opening journey that has led me to be calmer, more mindful,
            patient and loving  as a mother. Mama cacao has become a driving force in my
            journey of letting go of my anger and becoming the mother my children need, the
            one I needed myself as a child.
            <br/><br/>
            I’ve attended four ceremonies now and have also brought my eldest daughter (15).
            It gave us an opportunity to connect on a completely unique level and provide
            insight into my journey of overcoming my anger. Bringing understanding and
            compassion to our relationship, softening it and opening her heart to mama cacao
            as well.
            <br/><br/>
            I cannot recommend these ceremonies enough. From the bottom of my heart,
            Jenn’s cacao ceremonies have changed my relationships and my life. They are such
            a beautiful way to open your heart and welcome the change(s) you are seeking,
            whatever they might be.
          </span>
          <span>
            — Kristen P
          </span>
        </div>
      </div>
    </div>
  )
}