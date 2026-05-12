import SwitchLangBtn from "../../feature/language/component/SwitchLangBtn";
import SwitchModeThemeBtn from "../../feature/mode/component/SwitchModeThemeBtn";
import Navbar from "../components/Navbar";
import { NavigationBtn } from "../components/ui/button/Btn";
import Container from "../components/container/Container";
import type { ChildrenProps } from "../data/type";

const HeaderElement = ({ children } : ChildrenProps) => (
    <div className="hover:scale-110 transition-all">
        {children}
    </div>
)

const Header = () => {

    return (
        <Container spacing={2} customStyle="backdrop-blur-sm">
            <HeaderElement><NavigationBtn link={'/'} /></HeaderElement>
            <Navbar />
            <Container spacing={2}>
                <HeaderElement><SwitchLangBtn /></HeaderElement>
                <HeaderElement><SwitchModeThemeBtn /></HeaderElement>
            </Container>
        </Container>
    )
}

export default Header;