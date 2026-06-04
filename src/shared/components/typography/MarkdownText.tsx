import CustomText from "./CustomText";

const MarkDownText = ({children, wrapper} : { children : string, wrapper : string }) => {

	const splittedText = children.match(/\*\*[^\*]+\*\*|[^\*]+/g)

	return (
		<CustomText variant={wrapper}>
		{
			splittedText && splittedText.map((unitText, index) => {
				if (unitText.includes("**"))
				{
					const trim = unitText.replace(/^\*\*|\*\*$/g, "");
					return <strong key={index} className="text-accent">{trim}</strong>;
				}
				return unitText
			})
		}
		</CustomText>
	)
}

export default MarkDownText;