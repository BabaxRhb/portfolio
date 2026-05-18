import { useTranslation } from "react-i18next";
import SkillContainer from "../components/container/SkillContainer";

const Skill = () => {

	const [ t ] = useTranslation("global");

	const skills = [
		{
			title : t("skill.subtitle.web"),
			skills : [ "HTML", "CSS", "TailwindCSS", "Material UI", "Javascript", "Typescript", "Node.js", "React.js", "SQL" ]
		},
		{
			title: t("skill.subtitle.IT"),
			skills : [ "C", "C++", "Shell", "Docker", "Unity" ]
		},
		{
			title : t("skill.subtitle.design"),
			skills : [ "Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva" ]
		}
	]

	return (
		<div>
			{
				skills.map(( item, index ) => (
					<div key={index}>
						<SkillContainer
							title={item.title}
							skillArray={item.skills}
						/>
					</div>
				))
			}
		</div>
	)
}

export default Skill;
