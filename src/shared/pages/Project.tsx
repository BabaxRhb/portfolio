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
				content: 'Social media app',
				imgUrl: "project/likeo/likeo1.png",
				techno : ['React.js', 'Fastify', 'PostgreSQL', 'Prisma']
			},
			{ 
				title : 'WEBSERV',
				content: 'Web server from scratch',
				imgUrl: "project/webserv/webserv.webm",
				techno : ['C++']
			}
		]
	}

	const persoProject = {
		context : t("project.personnal.title"),
		projectList : [
			{ 
				title : 'PERIODIC TABLE',
				content: 'A fun and interactive way to learn chemistry',
				techno : ['React.js']
			},
			{ 
				title : 'LET\'S VOTE',
				content: 'A voting and polling API',
				techno : ['SQLite, Node.js']
			}
		]
	}

	return (
		<div className="flex flex-col gap-10">
			<BorderedText variant="h3">{firstProject.context}</BorderedText>
			{
				firstProject.projectList.map((project, index) => (
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
