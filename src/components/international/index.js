import React from "react";
import "./style.scss";

import { almut, anita, jag, joyce, rajendra, sara, winny } from "../speakers";
import Speaker from "../speaker";

import RegisterButton from "../register_button";

const int_speakers = [almut, anita, jag, joyce, rajendra, sara, winny];

export default () => {
  return (
    <section className="international">
      <div className="international__content">
        <h2>International Speakers</h2>

        <div className="speakers">
          {int_speakers.map((speaker) => {
            return <Speaker speaker={speaker} />;
          })}
        </div>

        <RegisterButton />
      </div>
    </section>
  );
};
