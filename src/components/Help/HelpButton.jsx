import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./HelpButton.css";

const HelpButton = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHelpClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="buttonWrapper">
      <button className="helpButton" onClick={handleHelpClick}>
        <img src="/icons/help.svg" alt={t("help")} />
      </button>
      <p>{t("help")}</p>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={handleCloseModal}>X</button>
            <h2>{t("needHelp")}</h2>
            <p>
              {t("helpLink")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpButton;
