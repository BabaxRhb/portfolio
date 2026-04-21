import SwitchLangBtn from "../../feature/language/component/SwitchLangBtn";
import SwitchModeThemeBtn from "../../feature/mode/component/SwitchModeThemeBtn";
import Navbar from "../components/Navbar";
import { NavigationBtn } from "../components/ui/Btn";
import Container from "../components/ui/Container";


const Header = () => {

    return (
        <Container spacing={2}>
            <NavigationBtn link={'/'} />
            <Navbar />
            <Container spacing={2}>
                <SwitchLangBtn />
                <SwitchModeThemeBtn />
            </Container>
        </Container>
    )
}

export default Header;