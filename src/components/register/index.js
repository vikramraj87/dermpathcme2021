import React from "react";
import "./style.scss";

import RegisterButton from "../register_button";

export default () => {
  return (
    <section className="register">
      <div className="register__content">
        <h2>How to Register?</h2>

        <div className="register__date">
          <p className="register__date__prompt">Last date for Registration</p>
          <p className="register__date__value">15th January 2021 8:00 AM</p>
        </div>

        <div className="register__modes">
          <p>Modes of payment</p>
          <ul>
            <li>Credit / Debit card</li>
            <li>Net banking</li>
            <li>Online money transfer </li>
          </ul>
        </div>

        <div className="register__cost">
          <div className="register__type">
            <p className="register__type__head">PG residents / Fellows</p>
            <p className="register__type__conditions">
              Scanned copy of a letter signed by their respective HODs must be
              sent to{" "}
              <a href="mailto:dermpathcmc2021@gmail.com" className="accent">
                Email
              </a>
            </p>
            <p className="register__type__price">&#8377; 500</p>
          </div>

          <div className="register__type">
            <p className="register__type__head">DSI Members</p>
            <p className="register__type__conditions">
              Must provide their membership ID at the time of registration
            </p>
            <p className="register__type__price">&#8377; 500</p>
          </div>

          <div className="register__type">
            <p className="register__type__head">Other delegates</p>
            <p className="register__type__price">&#8377; 750</p>
          </div>
        </div>

        <RegisterButton />
        <div className="register__cmc">
          <p>
            CMC delegates please register using{" "}
            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=pbyATdD_bUGdaCEPhdsO0dxg93Wgm-VLu-Pw_VN4RBdUQTlXSzFRWkdHRzVVT09QTzI1SzhJTE81VS4u"
              target="_blank"
              className="accent"
            >
              this link
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
