import { BorderedText } from "../components/typography/CustomText";
import ProjectCard from "../components/ui/ProjectCard";
import useProject from "../hooks/useProject";

const Project = () => {

	const {schoolProject, persoProject } = useProject();
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
			<BorderedText variant="h3">{persoProject.context}</BorderedText>
			{
				persoProject.projectList.map((project, index) => (
					<div key={`second-${index}`} className="flex justify-center">
						<ProjectCard project={project} />
					</div>
				))
			}
		</div>
	)
}

export default Project;
