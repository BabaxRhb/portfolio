import type React from "react";

interface TextProps {
    variant: string;
    children: React.ReactNode;
    textColor?: string;
}

const Text = ({ variant, children, textColor }: TextProps) => {

    const textColorClass = textColor ? `text-${textColor}` : 'text-black';
    const defaultStyle = 'text-center'

    switch (variant) {
        case 'h1':
            return <h1 className={`${defaultStyle} ${textColorClass} text-4xl`}>{children}</h1>;
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

export default Text;