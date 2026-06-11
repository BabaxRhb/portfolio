import type { CSSProperties } from 'react';
import CustomText from "./CustomText";

const MarkDownText = ({children, wrapper, textAlignement, style} : 
	{ children : string,
		wrapper : string,
		addClass?: string,
		style?: CSSProperties,
		textAlignement?: string,
	}) => {

	const splittedText = children.match(/\*\*[^\*]+\*\*|[^\*]+/g)

	return (
		<CustomText variant={wrapper} textAlignement={textAlignement} style={style}>
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