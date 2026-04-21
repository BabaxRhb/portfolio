import { useNavigate } from "react-router-dom";

interface BtnProps {
    link?: string;
    text?: string;
    onClick?: () => void;
}

const NavigationBtn = ({ link, text }: BtnProps) => {

    const navigate = useNavigate();

    return (
        <button 
            className="w-20 h-20 rounded-full bg-secondary"
            onClick={() => link ? navigate(link) : null}
        >{text}</button>
    )
}

const ActionBtn = ({ text, onClick }: BtnProps) => (
    <button 
        className="w-20 h-20 rounded-full bg-secondary"
        onClick={onClick}
    >
        {text}
    </button>
)

export { NavigationBtn, ActionBtn };