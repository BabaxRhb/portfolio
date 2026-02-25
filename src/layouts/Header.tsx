import Container from "../components/Container";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Header = () => {
    return (
        <Container bgColor="transparent">
            <Logo/>
            <Navbar/>
        </Container>
    )
}

export default Header;