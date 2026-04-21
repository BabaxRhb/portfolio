import { ActionBtn } from "../../../shared/components/ui/Btn"
import { useModeTheme } from "../provider/ModeThemeProvider";

const SwitchModeThemeBtn = () => {

    const { toggleModeTheme, theme } = useModeTheme();

    if (theme === 'dark') {
        return <ActionBtn onClick={toggleModeTheme} imgUrl="/public/images/dark-mode.svg" />
    }
    return <ActionBtn onClick={toggleModeTheme} imgUrl="/public/images/light-mode.svg" />
}

export default SwitchModeThemeBtn;