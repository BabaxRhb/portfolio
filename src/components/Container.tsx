interface ContainerProps {
    children: React.ReactNode[];
    bgColor?: string;
}

const Container = ({ children, bgColor }: ContainerProps) => {
    return (
        <div
            className={
                "w-full px-3 py-5 flex flex-row space-between" +
                + `bg-${bgColor ? bgColor : 'white'
            }`}
        >
            {children.map((item, index) => (
                <div key={index} className="child-container mx-2">
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Container;