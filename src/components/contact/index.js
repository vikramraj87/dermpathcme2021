import React from "react";
import "./style.scss";

export default () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <h4>Contact us</h4>
        <h5>For registration related queries</h5>
        <div className="contact__info">
          <div className="contact__person">
            <p>Dr. Amey Baitule</p>
            <p>9833072347</p>
          </div>
          <div className="contact__person">
            <p>Dr. Madhurima P</p>
            <p>9600486413</p>
          </div>
          <div className="contact__person">
            <p>Dr. Reshma Kurian</p>
            <p>8589059464</p>
          </div>
        </div>

        <h5>For abstract and scientific program related queries</h5>
        <div className="contact__info">
          <div className="contact__person">
            <p>Dr. Ramesh Babu</p>
            <p>9566434081</p>
          </div>
          <div className="contact__person">
            <p>Dr. Sherin Susheel Mathew</p>
            <p>9446961825</p>
          </div>
          <div className="contact__person">
            <p>Dr. Preethi Mary Eapen</p>
            <p>8589059464</p>
          </div>
        </div>

        <h5>Email</h5>
        <p>
          <a href="mailto:dermpathcmc2021@gmail.com">
            dermpathcmc2021@gmail.com
          </a>
        </p>

        <div className="footnote">*Applied for CME credit hours</div>
      </div>
    </section>
  );
};
