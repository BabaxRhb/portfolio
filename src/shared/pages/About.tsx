import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import Text from "../components/Text";

const About = () => {

    const [ t ] = useTranslation("global");

    return (
        <Container spacing={10} direction="column">
            <Text variant='h3'>{t("home.title")}</Text>
            <Text variant='h3'>{t("home.subtitle")}</Text>
            <Text variant='p'>{t("home.body")}</Text>
        </Container>
    )
}

export default About;
