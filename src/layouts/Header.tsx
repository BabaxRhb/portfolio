import Container from "../components/ui/Container";
import Navbar from "../components/Navbar";
import Circle from "../components/ui/Circle";

const Header = () => {
    return (
        <Container bgColor="transparent">
            <Circle />
            <Navbar />
            <Container>
                <Circle />
                <Circle />
            </Container>
        </Container>
    )
}

export default Header;