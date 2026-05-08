interface SkillUIProps {
	text : string,
	textSize? : string
}

const allTextSize = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl'
}

const SkillUI = ({text, textSize = "base"} : SkillUIProps) => {

	const textSizing = allTextSize[textSize as keyof typeof allTextSize];

	return (
		<div
		className={`
			border-solid border border-primary
			rounded-lg
			p-2
			text-center
			${textSizing}
		`}
		>{text}</div>
	)
}

export default SkillUI;