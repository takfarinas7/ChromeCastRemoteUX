import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./VolumeControl.css";

const VolumeControl = ({ power, handleVolumeUp, handleVolumeDown, handleMute, volume}) => {
  const { t } = useTranslation();


  return (
    

    <div className="volumeSection">
      {/* Barre de volume*/}
      <div className="volumeBarWrapper">
        <div
          className="volumeBar"
          style={{
            height: `${volume * 100}%`,
            backgroundColor: power ? "#4caf50" : "#808080", 
          }}
        ></div>
      </div>

      {/*Conteneur de boutons pour volume*/}
      <div className="buttonWrapper">
        <button className="remoteButton" onClick={handleVolumeUp}>
          <img src="/icons/volumeUp.svg" alt="Volume Up" />
        </button>
        <p>{t('volumeUp')}</p>
      </div>
      <div className="buttonWrapper">
        <button className="remoteButton" onClick={handleVolumeDown}>
          <img src="/icons/volumeDown.svg" alt="Volume Down" />
        </button>
        <p>{t('volumeDown')}</p>
      </div>
      <div className="buttonWrapper">
        <button className="remoteButton" onClick={handleMute}>
          <img src="/icons/mute.svg" alt="Mute" />
        </button>
        <p>{t('mute')}</p>
      </div>
    </div>
  );
};

export default VolumeControl;
