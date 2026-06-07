import { useTranslation } from "react-i18next";
import Container from "../components/container/Container";
import MarkDownText from "../components/typography/MarkdownText";
import CustomText from "../components/typography/CustomText";

import Avatar from "src/assets/avatar.svg?react";


const Home = () => {
    const [ t ] = useTranslation("global");

    return (
        <Container spacing={10} direction="column">
            <div className="flex flex-col gap-3 border-2 border-accent phone:p-5 p-3 rounded-xl">
                <MarkDownText wrapper='h3'>{t("home.hello")}</MarkDownText>
                <MarkDownText wrapper='h3'>{t("home.subtitle")}</MarkDownText>
                <CustomText variant='p'>{t("home.body")}</CustomText>
            </div>
            <svg className="phone:w-75 phone:h-75 w-50 h-50">
                <Avatar />
            </svg>
        </Container>
    )
}

export default Home;
