import { BorderedText } from "../../components/typography/CustomText";
import ProjectCard from "../../components/ui/ProjectCard";

import { useTranslation } from "react-i18next";
import  type { projectType } from "../../data/type";

const Project42 = () => {
	const projectType = "42";
	const [ t ] = useTranslation("global");

	const schoolProject = t(`projects.${projectType}`, { returnObjects: true }) as projectType[];

	const context = t("project.42.title");

	return (
		<div className="flex flex-col gap-10">
			<BorderedText variant="h3">{context}</BorderedText>
			{
				schoolProject.map((project, index) => {

					return (
						<div key={`${index}-${project.title}`} className="flex justify-center">
							<ProjectCard 
								projectId={index}
								projectType={projectType}
								rootLink="/projects/42/"
							/>
						</div>
					)
				})
			}
		</div>
	)
}

export default Project42;