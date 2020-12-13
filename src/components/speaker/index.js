import React from "react";
import "./style.scss";

export default (props) => {
  const { name, dp, centre, place } = props.speaker;

  return (
    <div className="speaker--wrap">
      <div className="speaker">
        <img src={dp} alt={name} className="speaker__image" />
        <p className="speaker__name">{name}</p>
        <p className={"speaker__centre"}>{centre}</p>
        <p className={"speaker__place"}>{place}</p>
      </div>
    </div>
  );
};
