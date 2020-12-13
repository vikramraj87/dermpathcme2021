import React from "react";

import "./style.scss";
import Speaker from "../speaker";

import asha from "./photos/asha.jpg";
import inchara from "./photos/inchara.jpg";
import leena from "./photos/leena.jpg";
import meenakshi from "./photos/meenakshi.jpg";
import nandhakumar from "./photos/nandhakumar.jpg";
import rajalakshmi from "./photos/rajalakshmi.jpg";
import ramam from "./photos/ramam.jpg";
import subhra from "./photos/subhra.jpg";
import sujay from "./photos/sujay.jpg";
import umanahar from "./photos/umanahar.jpg";
import venkataram from "./photos/venkataram.jpg";
import meera from "./photos/meera.jpg";

import RegisterButton from "../register_button";

export default () => {
  return (
    <section className="national">
      <div className="national__content">
        <h2>National Speakers</h2>

        <div className="speakers">
          <Speaker
            name={"Dr. Asha Kubba"}
            imgSrc={asha}
            loc={"Delhi Dermpath Laboratory, New Delhi"}
          />

          <Speaker
            name={"Dr. Inchara YK"}
            imgSrc={inchara}
            loc={"St. John's Medical College, Bangalore"}
          />

          <Speaker
            name={"Dr. Leena J Dennis"}
            imgSrc={leena}
            loc={"Sri Ramachandra Medical College, Chennai"}
          />

          <Speaker
            name={"Dr. Meenakshi Batrani"}
            imgSrc={meenakshi}
            loc={"Kubba Skin Clinic, Delhi"}
          />

          <Speaker
            name={"Dr. Nandakumar G"}
            imgSrc={nandhakumar}
            loc={"Trivandrum Medical College, Kerala"}
          />

          <Speaker
            name={"Dr. Rajalakshmi T"}
            imgSrc={rajalakshmi}
            loc={"St. John's Medical College, Bangalore"}
          />

          <Speaker
            name={"Dr. M Ramam"}
            imgSrc={ramam}
            loc={"AIIMS, New Delhi"}
          />

          <Speaker
            name={"Dr. Subhra Dhar"}
            imgSrc={subhra}
            loc={"Wizdermpathlab, Kolkata"}
          />

          <Speaker
            name={"Dr. Sujay Khandpur"}
            imgSrc={sujay}
            loc={"AIIMS, New Delhi"}
          />

          <Speaker
            name={"Dr. Uma Nahar Saikia"}
            imgSrc={umanahar}
            loc={"PGIMER, Chandigarh"}
          />

          <Speaker
            name={"Dr. Venkataram"}
            imgSrc={venkataram}
            loc={"Venkat center for skin and plastic surgery, Mysore"}
          />

          <Speaker
            name={"Dr. Meera Thomas"}
            imgSrc={meera}
            loc={"Christian Medical College, Vellore"}
          />
        </div>

        <RegisterButton />
      </div>
    </section>
  );
};
