import Arrow from "src/assets/arrow.svg?react";

interface LinkBtnProps {
	link: string;
	text: string;
}

const LinkBtn = ({ link, text }: LinkBtnProps) => {

	return (
		<a
			href={link}
			type="button"
			target={link.startsWith("mailto:") ? undefined : "_blank"}
			rel={link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
		>
			<div className="flex flex-row hover:scale-105 transition-all">
				{text}
				<Arrow className="rotate-45 stroke-accent fill-accent w-5 h-5"/>
			</div>
		</a>
	)
}

export default LinkBtn;