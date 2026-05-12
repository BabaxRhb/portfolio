import { ActionBtn } from "../../../shared/components/ui/button/Btn"
import { useModeTheme } from "../provider/ModeThemeProvider";

import LightModeIcon from "src/assets/light-mode.svg?react";
import DarkModeIcon from "src/assets/dark-mode.svg?react";

const SwitchModeThemeBtn = () => {

    const { toggleModeTheme, theme } = useModeTheme();

    if (theme === 'dark') {
        return <ActionBtn onClick={toggleModeTheme} Icon={DarkModeIcon} />
    }
    return <ActionBtn onClick={toggleModeTheme} Icon={LightModeIcon} />
}

export default SwitchModeThemeBtn;