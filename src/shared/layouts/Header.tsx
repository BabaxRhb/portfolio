import SwitchLangBtn from "../../feature/language/component/SwitchLangBtn";
import SwitchModeThemeBtn from "../../feature/mode/component/SwitchModeThemeBtn";
import Navbar from "../components/Navbar";
import Container from "../components/container/Container";
import type { ChildrenProps } from "../data/type";

const HeaderElement = ({ children } : ChildrenProps) => (
	<div className="hover:scale-110 transition-all">
		{children}
	</div>
)

const Header = () => {

	const position = "fixed z-50";

	const customStyle = `backdrop-blur-lg bg-background/10`;

	return (
		<Container spacing={2} position={position} customStyle={customStyle}>
			<Navbar />
			<Container spacing={2}>
				<HeaderElement><SwitchLangBtn /></HeaderElement>
				<HeaderElement><SwitchModeThemeBtn /></HeaderElement>
			</Container>
		</Container>
	)
}

export default Header;