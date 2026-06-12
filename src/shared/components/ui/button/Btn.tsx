import type { ElementType } from "react";
import { useNavigate } from "react-router-dom";

interface BtnProps {
    link?: string;
    size?: number;
    Icon?: ElementType;
    imgUrl?: string;
    onClick?: () => void;
}

const defaultSize = 35;

const NavigationBtn = ({ link, size = defaultSize, Icon }: BtnProps) => {

    const navigate = useNavigate();

    return (
        <button
            className={`flex items-center justify-center`}
            onClick={() => link ? navigate(link) : null}
        >
            {Icon && <Icon style={{ width: `${size}px`, height: `${size}px` }}/>}
        </button>
    )
}

const ActionBtn = ({ onClick, size = defaultSize, Icon }: BtnProps) => {

    return (
        <button
            className={`flex items-center justify-center`}
            onClick={onClick}
        >
            {Icon && <Icon style={{ width: `${size}px`, height: `${size}px` }}/>}
        </button>
    )
}

const GoBackBtn = ({ link } : {link: string}) => {

    const navigate = useNavigate();
	const btnStyle = `
        tablet:hidden
        absolute
        top-5
        left-5
        block
		bg-secondary
		text-text
        text-xl
		p-2
		hover:bg-accent
		w-15 h-15`
	return <button onClick={() => navigate(link)} className={btnStyle}>{"<"}</button>;
}

export { NavigationBtn, ActionBtn, GoBackBtn };