import "../style/testimonials.css";
import emily from "../images/emily.jpg";
import thomas from "../images/thomas.jpg";
import jennie from "../images/jennie.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials_container">
      <h2 className="testimonial_heading">CLIENT TESTIMONIALS</h2>
      <div className="testimonials">
        <div className="testimonial">
          <img src={emily} alt="emily" className="testimonial_image" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>Emily R.</h4>
          <p>Marketing Director</p>
        </div>
        <div className="testimonial">
          <img src={thomas} alt="thomas" className="testimonial_image" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h4> Thomas S.</h4>
          <p>Chief Operating Officer</p>
        </div>
        <div className="testimonial">
          <img src={jennie} alt="jennie" className="testimonial_image" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>Jennie F.</h4>
          <p>Business Owner</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
