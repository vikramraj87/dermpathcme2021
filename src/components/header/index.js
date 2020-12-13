import React from "react";
import "./style.scss";

import { BrowserRouter as Router, Link } from "react-router-dom";

import fb from "./fb.png";
import tw from "./twitter.png";

export default () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <a href="#">Dermpath CME</a>
        </div>

        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            {/*<li>*/}
            {/*  <Link to="/poster">Poster submission</Link>*/}
            {/*</li>*/}
          </ul>
        </nav>

        <nav className="header__secondary_nav">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/dermpathcmc2021"
                target="_blank"
              >
                <img src={fb} alt={"Facebook"} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/dermpath2021?s=08" target="_blank">
                <img src={tw} alt={"Twitter"} />
              </a>
            </li>
            <li>
              <a
                href="https://clin.cmcvellore.ac.in/conference/registration/login.aspx?request=cehfXhJpTdg9EDQp3J45A86XSvnOi/TLpr5erCdbueMfonaE8J5sVVOaJvwwErPW"
                className="button"
                target="_blank"
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
