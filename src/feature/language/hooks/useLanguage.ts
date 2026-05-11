import i18next from "i18next";
import { useState } from "react";

const langIconUrl = { en: 'images/eng.png', fr: 'images/french.png' }

const useLanguage = () => {
    const [ lang, setLang ] = useState(i18next.language);
    const [ iconUrl, setIconUrl ] = useState(lang === 'en' ? langIconUrl.en : langIconUrl.fr);

    const changeLanguage = () => {
        const newLang = lang === 'en' ? 'fr' : 'en';

        if (lang === 'en')
            setIconUrl(langIconUrl.fr);
        else
            setIconUrl(langIconUrl.en);
        setLang(newLang)
        i18next.changeLanguage(newLang);
    }

    return {
        iconUrl,
        changeLanguage
    }
}

export default useLanguage;