import type React from "react";

interface TextProps {
    variant?: string;
    children: React.ReactNode;
    textColor?: string;
    textWeight?: string;
}

const textColors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    text: 'text-text',
    red: 'text-red-500',
};

const textWeights = {
    thin : 'font-thin',
    extralight : 'font-extralight',
    light : 'font-light',
    normal : 'font-normal',
    medium : 'font-medium',
    semibold : 'font-semibold',
    bold : 'font-bold',
    extrabold : 'font-extrabold',
    black : 'font-black',
}

const CustomText = ({ variant = 'def', children, textColor, textWeight }: TextProps) => {

    const textColorClass = textColors[textColor as keyof typeof textColors] || 'text-text';
    const textWeightClass = textWeights[textWeight as keyof typeof textWeight] || 'text-normal';
    const defaultStyle = 'text-justify';

    switch (variant) {
        case 'h1':
            return <h1 className={`${defaultStyle} ${textColorClass} ${textWeightClass} text-4xl text-text`}>{children}</h1>;
        case 'h2':
            return <h2 className={`${defaultStyle} ${textColorClass} ${textWeightClass} text-3xl`}>{children}</h2>;
        case 'h3':
            return <h3 className={`${defaultStyle} ${textColorClass} ${textWeightClass} text-2xl`}>{children}</h3>;
        case 'h4':
            return <h4 className={`${defaultStyle} ${textColorClass} ${textWeightClass} text-xl`}>{children}</h4>;
        case 'p':
            return <p className={`${defaultStyle} ${textColorClass} ${textWeightClass} text-base`}>{children}</p>;
        default:
            return <p className={`${defaultStyle} ${textColorClass} ${textWeightClass} text-base`}>{children}</p>;
    }
}

export const BorderedText = ({ variant, children, textColor }: TextProps) => {
    return (
        <div className="border-b-1 border-secondary w-full">
            <CustomText variant={variant} textColor={textColor}>{children}</CustomText>
        </div>
    )
}

export default CustomText;