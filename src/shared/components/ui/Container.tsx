import React from "react";

interface ContainerProps {
	children: React.ReactNode;
	bgColor?: string;
	spacing?: number;
	direction?: 'row' | 'column';
}

const Container = ({ 
	children,
	bgColor,
	spacing = 1,
	direction = 'row'
}: ContainerProps) => {

	const defaultSetting = "w-full px-3 py-5 flex flex-wrap justify-center items-center";

	const flexDirection = direction === 'row' ? 'flex-row' : 'flex-col';
	const backGroundColor = bgColor ? `bg-${bgColor}` : 'bg-background';

	const gapStyle = spacing ? { gap: `${spacing * 0.25}rem` } : {};

	const childDefaultSetting = "child-container";

	const childrenArray = React.Children.toArray(children);

	return (
		<div
			style={gapStyle}
			className={`${defaultSetting} ${flexDirection} ${backGroundColor}`}>
			{childrenArray.map((item, index) => {
				return (
					<div key={index} className={`${childDefaultSetting}`}>
						{item}
					</div>
					)
				}
			)}
		</div>
	)
}

export default Container;