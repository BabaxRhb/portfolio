import { useNavigate } from "react-router-dom";

interface BtnProps {
    link?: string;
    text?: string;
    size?: number;
    imgUrl?: string;
    onClick?: () => void;
}

const NavigationBtn = ({ link, text, size = 50, imgUrl }: BtnProps) => {

    const navigate = useNavigate();

    return (
        <button
            style={{ width : `${size}px`, height: `${size}px`}}
            className={`rounded-full bg-primary`}
            onClick={() => link ? navigate(link) : null}
        >
            {imgUrl ? <img src={imgUrl} alt={text} /> : text}
        </button>
    )
}

const ActionBtn = ({ text, onClick, size = 50, imgUrl }: BtnProps) => {

    let imgSize = size - 20;
    if (imgSize < 0)
        imgSize = 0;

    return (
        <button
            style={{ width : `${size}px`, height: `${size}px`}}
            className={`rounded-full bg-primary`}
            onClick={onClick}
        >
            <div 
                style={{ width: `${imgSize}px`, height: `${imgSize}px`}}
                className="m-auto"
            >
                {imgUrl ? <img src={imgUrl} alt={text} /> : text}
            </div>
        </button>
    )
}



export { NavigationBtn, ActionBtn };