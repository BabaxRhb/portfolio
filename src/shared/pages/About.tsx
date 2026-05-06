import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import CustomText from "../components/typography/CustomText";

const About = () => {

    const [ t ] = useTranslation("global");
    const paragraph  = t("about.paragraph", { returnObjects: true }) as string[];

    return (
        <Container spacing={10} direction="column">
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
