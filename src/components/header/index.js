import React from "react";
import "./style.scss";

export default () => {
  return (
    <header className="header">
      <div class="header__content">
        <div className="header__logo">
          <a href="#">CME 2021</a>
        </div>

        <nav className="header__nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Schedule</a>
            </li>
            <li>
              <a href="#">Poster submission</a>
            </li>
          </ul>
        </nav>

        <nav className="header__secondary_nav">
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#" className="button">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
