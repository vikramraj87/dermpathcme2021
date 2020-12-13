import React from "react";
import "./style.scss";

import * as speakers from "../speakers";

const schedule_15 = {
  events: [
    {
      time: "3:00 PM",
      topic: "Inauguration",
    },
    {
      time: "3:20 PM",
      speaker: speakers.venkat,
      topic: "Clinicopathological aspects of alopecia",
    },
    {
      time: "3:40 PM",
      speaker: speakers.joyce,
      topic: "Approach to alopecia",
    },
    {
      time: "4:10 PM",
      topic: "Q & A",
    },
    {
      time: "4:25 PM",
      speaker: speakers.asha,
      topic: "Non-melanocytic pigmentary lesions",
    },
    {
      time: "4:55 PM",
      speaker: speakers.leena,
      topic: "Cutaneous deposits (Slide session)",
    },
    {
      time: "5:15 PM",
      topic: "Q & A",
    },
    {
      time: "5:30 PM",
      topic: "Tea Break",
    },
    {
      time: "6:00 PM",
      speaker: speakers.almut,
      topic: "Interstitial infiltrates - Clues in a disregarded compartment",
    },
    {
      time: "6:30 PM",
      speaker: speakers.meera,
      topic: "Approach to Panniculitis",
    },
    {
      time: "6:50 PM",
      topic: "Q & A",
    },
    {
      time: "7:05 PM",
      speaker: speakers.umanahar,
      topic: "Cutaneous collagen vascular diseases (Slide session)",
    },
    {
      time: "7:25 PM",
      speaker: speakers.jag,
      topic: "Invisible dermatosis",
    },
    {
      time: "8:05 PM",
      topic: "Q & A",
    },
  ],
};

const schedule_16 = {
  events: [
    {
      time: "1:30 PM",
      speaker: speakers.winny,
      topic: "Cutaneous lymphoproliferative disorders",
    },
    {
      time: "2:00 PM",
      speaker: speakers.anita,
      topic: "Borderline melanocytic lesions",
    },
    {
      time: "2:20 PM",
      speaker: speakers.nanda,
      topic: "Spongiotic dermatitis (Slide session)",
    },
    {
      time: "2:40 PM",
      topic: "Q & A",
    },
    {
      time: "2:55 PM",
      speaker: speakers.sara,
      topic: "Cutaneous soft tissue tumors",
    },
    {
      time: "3:25 PM",
      speaker: speakers.subhra,
      topic: "Cutaneous spindle cell tumors (Slide session)",
    },
    {
      time: "3:45 PM",
      topic: "Q & A",
    },
    {
      time: "4:00 PM",
      speaker: speakers.sujay,
      topic: "Recent advances in vasculitis",
    },
    {
      time: "4:20 PM",
      speaker: speakers.meenakshi,
      topic: "Bullous lesions of skin (Slide session)",
    },
    {
      time: "4:40 PM",
      topic: "Q & A",
    },
    {
      time: "4:55 PM",
      topic: "Tea Break",
    },
    {
      time: "5:30 PM",
      speaker: speakers.rajalakshmi,
      topic: "Skin adnexal tumors (Slide session)",
    },
    {
      time: "6:00 PM",
      speaker: speakers.inchara,
      topic: "Skin adnexal tumors (Slide session)",
    },
    {
      time: "6:20 PM",
      topic: "Q & A",
    },
    {
      time: "6:35 PM",
      speaker: speakers.ramam,
      topic: "Pebbles and pearls in dermatopathology",
    },
    {
      time: "7:05 PM",
      speaker: speakers.rajendra,
      topic: "2018 WHO update on melanocytic neoplasms",
    },
    {
      time: "8:05 PM",
      topic: "Q & A",
    },
  ],
};

const Event = ({ event }) => {
  const { time, topic } = event;
  if ("speaker" in event) {
    const { name, centre, place, dp } = event.speaker;
    return (
      <div className="event">
        <div className="event__time">{time}</div>
        <div className="event__speaker">
          <div className="event__speaker__image">
            <img src={dp} alt={name} />
          </div>
          <div className="event__speaker__info">
            <div className="event__speaker__name">{name}</div>
            <div className="event__speaker__centre">{centre}</div>
            <div className="event__speaker__place">{place}</div>
          </div>
        </div>
        <div className="event__topic">{topic}</div>
      </div>
    );
  } else {
    return (
      <div className="event break">
        <div className="event__time">{time}</div>
        <div className="event__topic">{topic}</div>
      </div>
    );
  }
};

export default () => {
  const events_1 = schedule_15.events.map((event) => {
    return <Event event={event} />;
  });
  return (
    <div className="schedule">
      <div className="schedule__content">
        <h3>Schedule for January 15, 2021</h3>

        {events_1}
      </div>
    </div>
  );
};
