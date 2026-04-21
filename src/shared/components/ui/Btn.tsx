import { useNavigate } from "react-router-dom";

interface BtnProps {
    link?: string;
    text?: string;
    size?: string;
    imgUrl?: string;
    onClick?: () => void;
}

const NavigationBtn = ({ link, text, size, imgUrl }: BtnProps) => {

    const navigate = useNavigate();

    return (
        <button 
            className={`w-${size || '10'} h-${size || '10'} rounded-full bg-secondary`}
            onClick={() => link ? navigate(link) : null}
        >
            {imgUrl ? <img src={imgUrl} alt={text} /> : text}
        </button>
    )
}

const ActionBtn = ({ text, onClick, size, imgUrl }: BtnProps) => (
    <button 
        className={`w-${size || '10'} h-${size || '10'} rounded-full bg-secondary`}
        onClick={onClick}
    >
        {imgUrl ? <img src={imgUrl} alt={text} /> : text}
    </button>
)

export { NavigationBtn, ActionBtn };