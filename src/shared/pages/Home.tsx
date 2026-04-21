import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import CustomText from "../components/Text";

const Home = () => {
    const [ t ] = useTranslation("global");

    return (
        <Container spacing={10} direction="column">
            <CustomText variant='h3'>{t("home.title")}</CustomText>
            <CustomText variant='h3'>{t("home.subtitle")}</CustomText>
            <CustomText variant='p'>{t("home.body")}</CustomText>
        </Container>
    )
}

export default Home;
