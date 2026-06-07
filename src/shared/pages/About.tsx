import { useTranslation } from "react-i18next";
import Container from "../components/container/Container";
import MarkDownText from "../components/typography/MarkdownText";

const About = () => {

    const [ t ] = useTranslation("global");
    const paragraph  = t("about.paragraph", { returnObjects: true }) as string[];

    return (
        <Container spacing={10} direction="column">
            <MarkDownText wrapper='h3'>{t("home.hello")}</MarkDownText>
            {
                paragraph.map((p, index) => (
                    <MarkDownText key={'About-' + index} wrapper='p'>{p}</MarkDownText>
                ))
            }
        </Container>
    )
}

export default About;
