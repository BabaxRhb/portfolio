import { Navigate } from "react-router-dom";
import { useSelectedProject } from "../../providers/ProjectProvider";
import CustomText, { BorderedText } from "../../components/typography/CustomText";
import SkillContainer from "../../components/container/SkillContainer";
import Container from "../../components/container/Container";
import { useTranslation } from "react-i18next";
import Carousel from "../../components/container/Carousel";
import type { projectType } from "../../data/type";

const ProjectTemplate = () => {

	const [ t ] = useTranslation("global");
	const { projectId, projectType } = useSelectedProject();

	if (projectId === null) return <Navigate to="/projects" replace />;
	
	const project = t(`projects.${projectType}`, { returnObjects: true }) as projectType[];

	const { title, techno, type, imgUrl, description, contribution } = project[projectId];

	return (
		<Container  direction="column" spacing={8}>
			<Container direction="column" spacing={2}>
				<CustomText variant="h1" textWeight="bold">{title}</CustomText>
				<CustomText variant="p" textWeight="light">{type}</CustomText>
			</Container>
			<Container direction="column" spacing={5}>
				<BorderedText variant="h4">{t("project.subtitle.description")}</BorderedText>
				<CustomText>{description}</CustomText>
				<Carousel imgUrl={imgUrl ? imgUrl : []}/>
			</Container>
			<Container direction="column" spacing={2}>
				<BorderedText variant="h4">{t("project.subtitle.techno")}</BorderedText>
				<SkillContainer skillArray={techno}/>
			</Container>
			{
				contribution &&
				<Container direction="column" spacing={2}>
					<BorderedText variant="h4">{t("project.subtitle.contribution")}</BorderedText>
					<CustomText>{contribution}</CustomText>
				</Container>
			}
		</Container>
	)
}

export default ProjectTemplate;