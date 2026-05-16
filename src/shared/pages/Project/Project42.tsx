import { BorderedText } from "../../components/typography/CustomText";
import ProjectCard from "../../components/ui/ProjectCard";

import useProject from "../../hooks/useProject";

const Project42 = () => {

	const { schoolProject } = useProject();

	return (
		<div className="flex flex-col gap-10">
			<BorderedText variant="h3">{schoolProject.context}</BorderedText>
			{
				schoolProject.projectList.map((project, index) => (
					<div key={`first-${index}`} className="flex justify-center">
						<ProjectCard project={project} />
					</div>
				))
			}
		</div>
	)
}

export default Project42;