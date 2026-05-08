import Container from "../container/Container";
import SkillContainer from "../container/SkillContainer";
import CustomText from "../typography/CustomText";

interface ProjectCardProps {
	project : {
		title : string,
		content : string,
		imgUrl : string,
		techno : string[]
	}
}

const ProjectCard = ( {project} : ProjectCardProps) => {

	const { title, content, imgUrl, techno } = project;

	return (
		<div className="flex flex-row border-solid border-secondary border rounded-md justify-center w-3/4 p-5">
			<img 
				src={imgUrl}
				className="max-w-[250px] min-w-[100px] h-[150px]"
			/>
			<Container direction="column">
				<CustomText variant="h4" textWeight="bold">{title}</CustomText>
				<CustomText>{content}</CustomText>
				<SkillContainer skillArray={techno} skillTextSize="xs"/>
			</Container>
		</div>
	)
}

export default ProjectCard;