import { useTranslation } from "react-i18next";
import { BorderedText } from "../components/typography/CustomText";
import ProjectCard from "../components/ui/ProjectCard";

const Project = () => {

	const [ t ] = useTranslation("global");

	const firstProject = {
		context : t("project.42.title"),
		projectList : [
			{ 
				title : 'LIKEO',
				content: 'This is a social media app',
				imgUrl: "",
				techno : ['React.js', 'Fastify', 'PostgreSQL', 'Prisma']
			},
			{ 
				title : 'WEBSERV',
				content: 'This is a web server',
				imgUrl: "project/webserv/webserv.webm",
				techno : ['C++']
			}
		]
	}

	const persoProject = {
		context : t("project.personnal.title"),
	}

	return (
		<div>
			<BorderedText>{firstProject.context}</BorderedText>
			{
				firstProject.projectList.map((project, index) => (
					<div key={index}>
						<ProjectCard project={project} />
					</div>
				))
			}
			<BorderedText>{persoProject.context}</BorderedText>
		</div>
	)
}

export default Project;
