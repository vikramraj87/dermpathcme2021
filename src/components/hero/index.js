import React from "react";
import "./style.scss";

export default () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__presents">
          Christian Medical College proudly presents
        </p>
        <h1 className="hero__event">
          Virtual Annual Conference of Dermatopathology Society of India
        </h1>

        <p className="hero__date">15th & 16th January 2021</p>

        <div className="hero__highlights">
          <ul>
            <li>
              <span className="number">19</span>Topics
            </li>
            <li>
              <span className="number">7</span>International speakers
            </li>
            <li>
              <span className="number">12</span>National speakers
            </li>
            <li>
              <span className="number">14</span>Credit hours
            </li>
          </ul>
        </div>

        <div className="hero__cta">
          <a href="#" className="button">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};
