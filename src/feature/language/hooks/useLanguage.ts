import i18next from "i18next";
import { useState } from "react";

const useLanguage = () => {
    const [ lang, setLang ] = useState(i18next.language);

    const changeLanguage = () => {
        const newLang = lang === 'en' ? 'fr' : 'en';
        setLang(newLang)
        i18next.changeLanguage(newLang);
    }

    return {
        lang,
        changeLanguage
    }
}

export default useLanguage;