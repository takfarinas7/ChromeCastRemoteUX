import { useState } from "react";
import { useTranslation } from "react-i18next";
import '../../i18n';
const TranslateButton = ({ handleChangeLang }) => {
  const { t } = useTranslation();
  const [nextLang, setNextLang] = useState("fr");

  return (
    <div className="buttonWrapper">
      <button className="translateButton" onClick={handleChangeLang}>
        <img src="/icons/translate.svg" alt="Translate" />
      </button>
      <p>{t("translate")}</p>
    </div>
  );
};

export default TranslateButton;
