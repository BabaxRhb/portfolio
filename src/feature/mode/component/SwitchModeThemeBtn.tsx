import { ActionBtn } from "../../../shared/components/ui/Btn"
import { useModeTheme } from "../provider/ModeThemeProvider";

const SwitchModeThemeBtn = () => {

    const { toggleModeTheme, theme } = useModeTheme();

    if (theme === 'dark') {
        return <ActionBtn onClick={toggleModeTheme} imgUrl="/images/dark-mode.svg" />
    }
    return <ActionBtn onClick={toggleModeTheme} imgUrl="/images/light-mode.svg" />
}

export default SwitchModeThemeBtn;