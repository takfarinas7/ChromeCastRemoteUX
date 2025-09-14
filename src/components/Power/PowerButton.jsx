import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./PowerButton.css";

const PowerButton = ({ power, togglePower }) => {

  return (
    <div className="powerWrapper">
      <button onClick={togglePower} className="powerbutton">
        <img src="/icons/power.svg" alt="Power" />
      </button>
     
    </div>
  );                                     
};

export default PowerButton;
