import globalStyle from '../../app/global.module.css';
import style from './testimonials.module.css';
import testimonialsList from '../testimonialsList';

export default function DeskTestimonials() {

  return (
    <div id="testimonials"
      className={`${style.testimonialsPage} ${globalStyle.screen}`}>
      <h2>Testimonials</h2>
      <div className={style.testimonials}>
        {testimonialsList.map((item, i) => {
          return (
            <div key={i} className={style.testimonial + " " + (item.testimonial.length > 800 ? style.long : "")}>
              <span>
                {item.testimonial}
              </span>
              <span>
                — {item.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}