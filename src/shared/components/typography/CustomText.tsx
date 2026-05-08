import type React from "react";

interface TextProps {
    variant: string;
    children: React.ReactNode;
    textColor?: string;
}

const CustomText = ({ variant, children, textColor }: TextProps) => {

    const textColorClass = textColor ? `text-${textColor}` : 'text-text';
    const defaultStyle = 'text-justify';

    switch (variant) {
        case 'h1':
            return <h1 className={`${defaultStyle} ${textColorClass} text-4xl text-text`}>{children}</h1>;
        case 'h2':
            return <h2 className={`${defaultStyle} ${textColorClass} text-3xl`}>{children}</h2>;
        case 'h3':
            return <h3 className={`${defaultStyle} ${textColorClass} text-2xl`}>{children}</h3>;
        case 'h4':
            return <h4 className={`${defaultStyle} ${textColorClass} text-xl`}>{children}</h4>;
        case 'p':
            return <p className={`${defaultStyle} ${textColorClass} text-base`}>{children}</p>;
        default:
            return <p className={`${defaultStyle} ${textColorClass} text-base`}>{children}</p>;
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