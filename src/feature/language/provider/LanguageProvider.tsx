import i18next from "i18next";
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import global_en from "../translation/en.json"
import global_fr from "../translation/fr.json"

import type { ChildrenProps } from "../../../shared/data/type";

i18next
	.use(LanguageDetector)
	.init({
	interpolation: { escapeValue: false },
	fallbackLng: "en",
	load: "languageOnly",
	resources: {
		en: { global: global_en },
		fr: { global: global_fr },
	},
	detection: {
		order: ["localStorage", "navigator"],
		caches: ["localStorage"],
	},
});

const LanguageProvider = ({ children } : ChildrenProps) => {
	return (
		<I18nextProvider i18n={i18next}>
			{children}
		</I18nextProvider>
	)
}

export default LanguageProvider;