interface ContainerProps {
    children: React.ReactNode[];
    bgColor?: string;
}

const Container = ({ children, bgColor }: ContainerProps) => {
    return (
        <div
            className={
                "w-full px-3 py-5 flex flex-row space-between justify-center items-center" +
                + `bg-${bgColor ? bgColor : 'white'
            }`}
        >
            {children.map((item, index) => (
                <div key={index} className="child-container mx-2 flex items-center">
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Container;