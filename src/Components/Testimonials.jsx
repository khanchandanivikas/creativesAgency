import React from "react";
import "./Style/Testimonials.css";
import emily from "./images/image-emily.jpg";
import thomas from "./images/image-thomas.jpg";
import jennie from "./images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div>
      <div>
        <h2 className="testimonial-heading">CLIENT TESTIMONIALS</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <img src={emily} alt="emily" className="testimonial-image" />
          <p className="testimonial-text">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>Emily R.</h4>
          <p className="testimonial-ocupation">Marketing Director</p>
        </div>
        <div className="testimonial">
          <img src={thomas} alt="thomas" className="testimonial-image" />
          <p className="testimonial-text">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h4> Thomas S.</h4>
          <p className="testimonial-ocupation">Chief Operating Officer</p>
        </div>
        <div className="testimonial">
          <img src={jennie} alt="jennie" className="testimonial-image" />
          <p className="testimonial-text">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>Jennie F.</h4>
          <p className="testimonial-ocupation">Business Owner</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
