import { BorderedText } from "../../components/typography/CustomText";
import ProjectCard from "../../components/ui/ProjectCard";

import { useTranslation } from "react-i18next";
import  type { projectType } from "../../data/type";

const ProjectPersonal = () => {
	const projectType = "personal";
	const [ t ] = useTranslation("global");

	const personalProject = t(`projects.${projectType}`, { returnObjects: true }) as projectType[];

	const context = t("project.personal.title");

	return (
		<div className="flex flex-col gap-10">
			<BorderedText variant="h3">{context}</BorderedText>
			{
				personalProject.map((project, index) => {

					return (
						<div key={`${index}-${project.title}`} className="flex justify-center">
							<ProjectCard 
								projectId={index}
								projectType={projectType}
								rootLink="/projects/personal/"
							/>
						</div>
					)
				})
			}
		</div>
	)
}

export default ProjectPersonal;
