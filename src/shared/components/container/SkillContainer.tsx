import { BorderedText } from "../typography/CustomText";
import SkillUI from "../ui/SkillUI";
import Container from "./Container";

interface SkillContainerProps {
    title? : string,
    skillArray : string[],
    skillTextSize?: string
}

const SkillContainer = ({ title, skillArray, skillTextSize } : SkillContainerProps) => {
    return (
        <div>
            {title && <BorderedText variant={"h3"}>{title}</BorderedText>}
            <Container spacing={2}>
            {
                skillArray.map((item, index) => (
                    <div key={index}>
                        <SkillUI text={item} textSize={skillTextSize}/>
                    </div>
                ))
            }
            </Container>
        </div>
    )
}

export default SkillContainer;