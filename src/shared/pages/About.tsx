import { useTranslation } from "react-i18next";
import Container from "../components/container/Container";
import CustomText from "../components/typography/CustomText";

const About = () => {

    const [ t ] = useTranslation("global");
    const paragraph  = t("about.paragraph", { returnObjects: true }) as string[];

    const test = "This is a **test** string with **markdown** syntax. It should be parsed and rendered correctly.";

    return (
        <Container spacing={10} direction="column">
            <CustomText variant='p'>{test}</CustomText>
            <CustomText variant='h3'>{t("home.title")}</CustomText>
            {
                paragraph.map((p, index) => (
                    <CustomText key={index} variant='p'>{p}</CustomText>
                ))
            }
        </Container>
    )
}

export default About;
