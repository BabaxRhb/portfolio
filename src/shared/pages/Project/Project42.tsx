import { Outlet } from "react-router-dom";
import { BorderedText } from "../../components/typography/CustomText";
import ProjectCard from "../../components/ui/ProjectCard";

import useProject from "../../hooks/useProject";
import { useState } from "react";
import type { projectType } from "../../data/type";

const Project42 = () => {

	const { schoolProject } = useProject();

	const [ selectedProject, setSelectedProject ] = useState<projectType | null >(null);

	return (
		<div className="flex flex-col gap-10">
			<BorderedText variant="h3">{schoolProject.context}</BorderedText>
			{
				schoolProject.projectList.map((project, index) => (
					<div key={`first-${index}`} className="flex justify-center">
						<ProjectCard project={project} setter={setSelectedProject} />
					</div>
				))
			}
			<Outlet context={{ selectedProject }} />
		</div>
	)
}

export default Project42;