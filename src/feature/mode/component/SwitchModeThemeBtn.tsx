import { ActionBtn } from "../../../shared/components/ui/button/Btn"
import { useModeTheme } from "../provider/ModeThemeProvider";

import LightModeIcon from "src/assets/sun.svg?react";
import DarkModeIcon from "src/assets/moon.svg?react";

const SwitchModeThemeBtn = () => {

    const { toggleModeTheme, theme } = useModeTheme();

    const Icon = theme === 'dark' ? DarkModeIcon : LightModeIcon;

    return <ActionBtn onClick={toggleModeTheme} Icon={Icon} />
}

export default SwitchModeThemeBtn;