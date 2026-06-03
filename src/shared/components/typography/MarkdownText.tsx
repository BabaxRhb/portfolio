import CustomText from "./CustomText";

const MarkDownText = ({children, wrapper} : { children : string, wrapper : string }) => {

	const splittedText = children.split("**")

	return (
		<div className="flex">
		{
			splittedText.map((unitText, index) => {

				if (unitText.includes("**"))
					return <strong key={index}>{unitText}</strong>;
				else
					return <CustomText variant={wrapper} key={index} >{unitText}</CustomText>
			})
		}
		</div>
	)
}

export default MarkDownText;