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

    const ITSkill = [
        "C", "C++", "Shell", "Docker", "Unity"
    ]

    const designSkill = [
        "Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva"
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
            <Container spacing={2}>
                {
                    ITSkill.map((item, index) => (
                        <div key={index}><SkillUI text={item} /></div>
                    ))
                }
            </Container>
            <BorderedText variant={"h3"}>{borderedTitle[2]}</BorderedText>
            <Container spacing={2}>
                {
                    designSkill.map((item, index) => (
                        <div key={index}><SkillUI text={item} /></div>
                    ))
                }
            </Container>
        </div>
    )
}

export default Skill;
