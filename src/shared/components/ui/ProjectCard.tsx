import { useTranslation } from "react-i18next";
import Container from "../container/Container";
import SkillContainer from "../container/SkillContainer";
import CustomText from "../typography/CustomText";
import { useNavigate } from "react-router-dom";

import  type { projectType } from "../../data/type";
import { useSelectedProject } from "../../providers/ProjectProvider";

interface ProjectCardProps {
	project : projectType & {
		status: boolean
	}
	rootLink: string;
}

const ProjectCard = ( { project, rootLink } : ProjectCardProps) => {

	const [ t ] = useTranslation("global");
	const navigate = useNavigate();
	const { setSelectedProject } = useSelectedProject();

	const { title, shortDescription, imgUrl, techno, status } = project;

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
				transition-all
			"
			onClick={(e) => {
				const { status, ...projectWithoutStatus } = project;
				if (status === false) return;
				e.preventDefault();
				setSelectedProject(projectWithoutStatus);
				navigate(rootLink + title);
			}}
		>
			{
				status ? 
				<img src={imgUrl} className="max-w-50 min-w-25 h-50 tablet:block hidden"/>
				: null
			}
			<Container direction="column" bgColor="inherit">
				<CustomText variant="h4" textWeight="bold">{title}</CustomText>
				<CustomText>{shortDescription}</CustomText>
				<SkillContainer skillArray={techno} skillTextSize="xs"/>
				{!status ? <CustomText textColor="accent">{t("project.ongoing")}</CustomText> : null}
			</Container>
		</div>
	)
}

export default ProjectCard;

