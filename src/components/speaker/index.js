import React from "react";
import "./style.scss";

export default (props) => {
  const { imgSrc, name, loc } = props;

  return (
    <div className="speaker--wrap">
      <div className="speaker">
        <img src={imgSrc} alt={name} className="speaker__image" />
        <p className="speaker__name">{name}</p>
        <p className={"speaker__loc"}>{loc}</p>
      </div>
    </div>
  );
};
