import Navbar from "../components/Navbar";
import Circle from "../components/ui/Circle";
import Container from "../components/ui/Container";


const Header = () => {
    return (
        <Container bgColor="transparent" spacing={2}>
            <Circle />
            <Navbar />
            <Container spacing={2}>
                <Circle />
                <Circle />
            </Container>
        </Container>
    )
}

export default Header;