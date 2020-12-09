import React from "react";
import "./style.scss";

export default () => {
  return (
    <section className="register">
      <div className="register__content">
        <h2>How to Register?</h2>

        <div className="register__date">
          <p>Last date for Registration</p>
          <p>15th January 2021</p>
        </div>

        <div className="register__modes">
          <p>Modes of payment</p>
          <ul>
            <li>Credit / Debit card</li>
            <li>Net banking</li>
            <li>Online money transfer </li>
          </ul>
        </div>

        <div className="register__cost"></div>

        <a href="#" className="button">
          Register Now
        </a>
      </div>
    </section>
  );
};
