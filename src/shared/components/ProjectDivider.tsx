import CustomText from "./typography/CustomText";

interface ProjectDividerProps {
    title : string,
    content : string
}

const ProjectDivider = ({ title, content } : ProjectDividerProps) => {
    return (
        <div
            className="
                w-62.5
                h-87.5
                p-5
                bg-secondary
                hover:bg-secondary-light
            "
        >
            <CustomText textColor="accent" textWeight="bold" variant={"h4"} children={title} />
            <CustomText children={content} />
        </div>
    )
}

export default ProjectDivider;