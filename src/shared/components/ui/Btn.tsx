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
            style={{ width: size ? `${size}px` : '50px', height: size ? `${size}px` : '50px' }}
            className={`rounded-full bg-secondary`}
            onClick={() => link ? navigate(link) : null}
        >
            {imgUrl ? <img src={imgUrl} alt={text} /> : text}
        </button>
    )
}

const ActionBtn = ({ text, onClick, size, imgUrl }: BtnProps) => (
    <button
        style={{ width: size ? `${size}px` : '50px', height: size ? `${size}px` : '50px' }}
        className={`rounded-full bg-secondary`}
        onClick={onClick}
    >
        {imgUrl ? <img src={imgUrl} alt={text} /> : text}
    </button>
)

export { NavigationBtn, ActionBtn };