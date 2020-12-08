import React from "react";
import "./style.scss";

import Speaker from "../speaker";

import almut from "./photos/almut.jpg";
import anita from "./photos/anita.jpg";
import jag from "./photos/jag_bhawan.jpeg";
import joyce from "./photos/joyce_lee.jpg";
import rajendra from "./photos/rajendra_singh.jpg";
import sara from "./photos/sara.jpg";
import winny from "./photos/winny.JPG";

export default () => {
  return (
    <section className="international">
      <div className="international__content">
        <h2>International Speakers</h2>

        <div className="speakers">
          <Speaker
            name={"Dr. Almut Boer"}
            imgSrc={almut}
            loc={"Dermatologikum, Hamburg, Germany"}
          />

          <Speaker
            name={"Dr. Anita Abraham"}
            imgSrc={anita}
            loc={"Tamworth Base Hospital, Sydney, Australia"}
          />

          <Speaker
            name={"Dr. Jag Bhawan"}
            imgSrc={jag}
            loc={"Boston School of Medicine, USA"}
          />

          <Speaker
            name={"Dr. Joyce Lee"}
            imgSrc={joyce}
            loc={"National Skin Centre, Singapore"}
          />

          <Speaker
            name={"Dr. Rajendra Singh"}
            imgSrc={rajendra}
            loc={"Icahn School of Medicine, Mount Sinai, New York"}
          />

          <Speaker
            name={"Dr. Sara Edward"}
            imgSrc={sara}
            loc={"St. James Hospital, Leeds, UK"}
          />

          <Speaker
            name={"Dr. Winny P Varikatt"}
            imgSrc={winny}
            loc={"ICPMR, Westmead hospital, Sydney, Australia"}
          />
        </div>

        <a href="#" className="button">
          Register Now
        </a>
      </div>
    </section>
  );
};
