import React from "react";

import "./style.scss";
import Speaker from "../speaker";

import {
  asha,
  inchara,
  leena,
  meenakshi,
  meera,
  nanda,
  rajalakshmi,
  ramam,
  subhra,
  sujay,
  umanahar,
  venkat,
} from "../speakers";

import RegisterButton from "../register_button";

const nat_speakers = [
  asha,
  inchara,
  leena,
  meenakshi,
  meera,
  nanda,
  rajalakshmi,
  ramam,
  subhra,
  sujay,
  umanahar,
  venkat,
];

export default () => {
  return (
    <section className="national">
      <div className="national__content">
        <h2>National Speakers</h2>

        <div className="speakers">
          {nat_speakers.map((speaker) => {
            return <Speaker speaker={speaker} />;
          })}
        </div>

        <RegisterButton />
      </div>
    </section>
  );
};
