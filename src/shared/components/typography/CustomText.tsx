import type { CSSProperties } from 'react';

interface TextProps {
    variant?: string;
    children: React.ReactNode;
    textColor?: string;
    textWeight?: string;
    textAlignement?: string;
    style?: CSSProperties;
}

const textColors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    text: 'text-text',
    red: 'text-red-500',
    textDisabled: 'text-disabled'
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

const textSizes = {
    h1: 'text-4xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-l',
    p: 'text-base',
    def: 'text-base',
};

const CustomText = ({ variant = 'def', children, textColor, textWeight, textAlignement, style }: TextProps) => {

    const textColorClass = textColors[textColor as keyof typeof textColors] || 'text-text';
    const textWeightClass = textWeights[textWeight as keyof typeof textWeights] || 'font-normal';
    const textSizeClass = textSizes[variant as keyof typeof textSizes] || 'text-base';
    const defaultStyle = textAlignement ? textAlignement : "text-center";

    switch (variant) {
        case 'h1':
            return <h1 style={style} className={`${defaultStyle} ${textSizeClass} ${textColorClass} ${textWeightClass}`}>{children}</h1>;
        case 'h2':
            return <h2 style={style} className={`${defaultStyle} ${textSizeClass} ${textColorClass} ${textWeightClass}`}>{children}</h2>;
        case 'h3':
            return <h3 style={style} className={`${defaultStyle} ${textSizeClass} ${textColorClass} ${textWeightClass}`}>{children}</h3>;
        case 'h4':
            return <h4 style={style} className={`${defaultStyle} ${textSizeClass} ${textColorClass} ${textWeightClass}`}>{children}</h4>;
        case 'p':
            return <p style={style} className={`${defaultStyle} ${textSizeClass} ${textColorClass} ${textWeightClass}`}>{children}</p>;
        default:
            return <p style={style} className={`${defaultStyle} ${textSizeClass} ${textColorClass} ${textWeightClass}`}>{children}</p>;
    }
}

export const BorderedText = ({ variant, children, textColor }: TextProps) => {
    return (
        <div className={`border-b border-secondary w-full`}>
            <CustomText variant={variant} textColor={textColor}>{children}</CustomText>
        </div>
    )
}

export default CustomText;