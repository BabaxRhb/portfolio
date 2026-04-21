import { ActionBtn } from "../../../shared/components/ui/Btn"
import { useModeTheme } from "../provider/ModeThemeProvider";

const SwitchModeThemeBtn = () => {

    const { toggleModeTheme } = useModeTheme();

    return <ActionBtn onClick={toggleModeTheme} />
}

export default SwitchModeThemeBtn;