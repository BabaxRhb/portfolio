import { ActionBtn } from "../../../shared/components/ui/button/Btn"
import useLanguage from "../hooks/useLanguage";

const SwitchLangBtn = () => {
    const { iconUrl, changeLanguage } = useLanguage();
    return <ActionBtn onClick={changeLanguage} imgUrl={iconUrl} />
}

export default SwitchLangBtn;