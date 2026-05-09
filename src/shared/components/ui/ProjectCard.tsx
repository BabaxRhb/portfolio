import { useTranslation } from "react-i18next";
import Container from "../container/Container";
import SkillContainer from "../container/SkillContainer";
import CustomText from "../typography/CustomText";

interface ProjectCardProps {
	project : {
		title : string,
		content : string,
		imgUrl? : string,
		techno : string[],
		status: boolean
	}
}

const ProjectCard = ( {project} : ProjectCardProps) => {

	const [ t ] = useTranslation("global");

	const { title, content, imgUrl, techno, status } = project;

	return (
		<div 
			className="
				flex flex-row
				border-solid border-secondary border rounded-md
				justify-center
				w-3/4
				p-5
				bg-inherit
				hover:scale-110
		">
			{
				status ? 
				<img src={imgUrl} className="max-w-[200] min-w-[100px] h-[200px]"/> 
				: null
			}
			<Container direction="column" bgColor="inherit">
				<CustomText variant="h4" textWeight="bold">{title}</CustomText>
				<CustomText>{content}</CustomText>
				<SkillContainer skillArray={techno} skillTextSize="xs"/>
				{!status ? <CustomText textColor="accent">{t("project.ongoing")}</CustomText> : null}
			</Container>
		</div>
	)
}

export default ProjectCard;