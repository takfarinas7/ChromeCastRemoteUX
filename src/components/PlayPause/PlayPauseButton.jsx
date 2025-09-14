import { useTranslation } from "react-i18next";
import "./PlayPauseButton.css";

const PlayPauseButton = ({ isPlay, handlePlayBtn }) => {
  const { t } = useTranslation();

  return (
    <div className="buttonWrapper">
      <button
        onClick={handlePlayBtn}
        className="playpausebutton"
      >
        <img
          src={isPlay ? "/icons/play.svg" : "/icons/pause.svg"}
          alt={isPlay ? t("play") : t("pause")}
        />
      </button>
      <p>{isPlay ? t("play") : t("pause")}</p> 
    </div>
  );
};

export default PlayPauseButton;
