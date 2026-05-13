import { ActionBtn } from "../../../shared/components/ui/button/Btn"
import useLanguage from "../hooks/useLanguage";

import AmericaIcon from "src/assets/america.svg?react";
import FrenchIcon from "src/assets/french.svg?react";

const SwitchLangBtn = () => {
    const { lang, changeLanguage } = useLanguage();

    const Icon = lang === 'en' ? AmericaIcon : FrenchIcon;

    return <ActionBtn onClick={changeLanguage} Icon={Icon} />
}

export default SwitchLangBtn;