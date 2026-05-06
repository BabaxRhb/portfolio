import { BorderedText } from "../components/typography/CustomText";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import SkillUI from "../components/ui/SkillUI";

const Skill = () => {

    const [ t ] = useTranslation("global");

    const borderedTitle = [ t("skill.title.web"), t("skill.title.IT"), t("skill.title.design") ];

    const webSkill = [
        "HTML", "CSS", "TailwindCSS", "Material UI", "Javascript", "Typescript", "Node.js",
        "React.js", "SQL"
    ]

    return (
        <div>
            <div>
                <BorderedText variant={"h3"}>{borderedTitle[0]}</BorderedText>
                <Container spacing={2}>
                {
                    webSkill.map((item, index) => (
                        <div key={index}><SkillUI text={item} /></div>
                    ))
			    }
                </Container>
            </div>
            <BorderedText variant={"h3"}>{borderedTitle[1]}</BorderedText>
            <BorderedText variant={"h3"}>{borderedTitle[2]}</BorderedText>

        </div>
    )
}

export default Skill;
