import { useTranslation } from "react-i18next";
import Container from "../components/container/Container";
import MarkDownText from "../components/typography/MarkdownText";
import CustomText from "../components/typography/CustomText";

const Home = () => {
    const [ t ] = useTranslation("global");

    return (
        <Container spacing={10} direction="column">
            <MarkDownText wrapper='h3'>{t("home.title")}</MarkDownText>
            <MarkDownText wrapper='h3'>{t("home.subtitle")}</MarkDownText>
            <CustomText variant='p'>{t("home.body")}</CustomText></Container>
    )
}

export default Home;
