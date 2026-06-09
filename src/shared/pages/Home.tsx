import { useTranslation } from "react-i18next";
import Container from "../components/container/Container";

import Avatar from "src/assets/avatar.svg?react";
import TypewriterEffect from "../components/typography/TypeWritterEffect";

const Home = () => {
    const [ t ] = useTranslation("global");

    const homeText = [ t("home.hello"),  t("home.subtitle"), t("home.body") ];

    const speed = 50;
    let cumulative = 0;
    const delay = homeText.map(text => {
        const currentDelay = cumulative;
        cumulative += text.length * speed;
        return currentDelay;
    });

    return (
        <Container spacing={5} direction="column">
            <div className="flex flex-col gap-3 phone:p-5 p-3 rounded-xl phone:h-50 h-100">
                {
                    homeText.map((text, index) => {
                        return <TypewriterEffect
                            key={'home' + index}
                            text={text}
                            speed={speed}
                            delay={delay[index]}
                            wrapper="h4" />
                    })
                }
            </div>
            <svg className="phone:w-75 phone:h-60 w-60 h-50">
                <Avatar />
            </svg>
        </Container>
    )
}

export default Home;
