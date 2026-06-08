import { useTranslation } from "react-i18next";
import Container from "../components/container/Container";
import MarkDownText from "../components/typography/MarkdownText";
import CustomText from "../components/typography/CustomText";

import Avatar from "src/assets/avatar.svg?react";


const Home = () => {
    const [ t ] = useTranslation("global");

    return (
        <Container spacing={10}>
            <div className="flex flex-col gap-3 phone:p-5 p-3 rounded-xl">
                <MarkDownText wrapper='h3' addClass="animate-text" style={{ animationDelay: '0s' }}>{t("home.hello")}</MarkDownText>
                <MarkDownText wrapper='h3' addClass="animate-text" style={{ animationDelay: '1s' }}>{t("home.subtitle")}</MarkDownText>
                <CustomText variant='p' addClass="animate-text" style={{ animationDelay: '2s' }}>{t("home.body")}</CustomText>
            </div>
            <svg
                className="phone:w-75 phone:h-75 w-50 h-50 fadeImg"
                style={{ animationDelay: '3s' }}
            >
                <Avatar />
            </svg>
        </Container>
    )
}

export default Home;
