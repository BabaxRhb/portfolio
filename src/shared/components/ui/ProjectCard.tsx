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
		<div className="flex flex-row gap-5">
			<img 
				src={imgUrl}
				className="w-[150px] h-[150px]"
			/>
			<div>
				<CustomText variant="h4">{title}</CustomText>
				<CustomText>{content}</CustomText>
				<SkillContainer skillArray={techno} />
			</div>
		</div>
	)
}

export default ProjectCard;