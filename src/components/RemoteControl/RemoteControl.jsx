import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./RemoteControl.css";
import PowerButton from "../Power/PowerButton";
import PlayPauseButton from "../PlayPause/PlayPauseButton";
import VolumeControl from "../Volume/VolumeControl"; 
import HelpButton from "../Help/HelpButton";
import TranslateButton from "../Translate/TranslateButton";
import Cast from "../Cast/Cast";

const RemoteControl = () => {

  const {initialize, handlePlayBtn, isPlay, isPower, handleVolumeUp, handleVolumeDown, handleMute, volume, handleNextVideo, handlePreviousVideo, handleAdvanceVideo10s, handleRewindVideo10s} = Cast();
  

  const { i18n, t } = useTranslation();

  const [power, setPower] = useState(() => {
    
    return localStorage.getItem("powerState") === "true"; 
  });
  const [etat, setEtat] = useState("play");

  useEffect(() => {
    localStorage.setItem("powerState", power);
  }, [power]);

  const handleChangeLang = () => {
    const nextLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(nextLang);
  };

  return (

    <div className="remoteContainer">
      <div className="header">
     
        <div className="powerStatusLeft">
          <div className={`powerIndicator ${isPower ? "on" : "off"}`}></div>
          <p className="powerIndicatorLabel">{t(isPower ? "opened" : "closed")}</p>
        </div>

     
        <div className="powerStatusRight">
          <PowerButton power={isPower} togglePower={initialize} />
          <p className="powerStatusText">{t(isPower ? "powerOff" : "powerOn")}</p>
        </div>
      </div>


      {/*Cercle du milieu*/}
      <div className="circle">
  <div className="comm right">
    <button className="buttonCircle" onClick={handleNextVideo}>
      <img src="/icons/arrow-right-arda.svg" alt="Arrow Right" />
    </button>
    <p>{t('next')}</p> 
  </div>
  <div className="comm left">
    <button className="buttonCircle" onClick={handlePreviousVideo}>
      <img src="/icons/arrow-left-arda.svg" alt="Arrow Left" />
    </button>
    <p>{t('previous')}</p> 
  </div>
</div>

      


      {/* Bouton Play/Pause */}
      <PlayPauseButton
        etat={etat}
        power={power}
        togglePlayPause={() => setEtat(etat === "play" ? "pause" : "play")}
        handlePlayBtn = {handlePlayBtn}
        isPlay={isPlay}
      />

      {/* -10s et +10s */}
      <div className="circleControls">
        <div className="arrowButtonWrapper">
          <button className="remoteButton" onClick={handleRewindVideo10s}>
            <img src="/icons/arrow-left.svg" alt="Arrow Left" />
          </button>
          <p className="arrowText">-10s</p>
        </div>
        <div className="arrowButtonWrapper">
          <button className="remoteButton" onClick={handleAdvanceVideo10s}>
            <img src="/icons/arrow-right.svg" alt="Arrow Right" />
          </button>
          <p className="arrowText">+10s</p>
        </div>
      </div>

    
      <div className="buttonContainer">
        <div className="volumeSection">
          <VolumeControl power={isPower} handleVolumeUp={handleVolumeUp} handleVolumeDown={handleVolumeDown} handleMute={handleMute} volume={volume}/> {/* Passe l'état power ici */}
        </div>

      
        <div className="extraButtons">
          <HelpButton power={power} />
          <TranslateButton handleChangeLang={handleChangeLang} />
        </div>
      </div>
    </div>
  );
};

export default RemoteControl;
