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

export { NavigationBtn, ActionBtn };