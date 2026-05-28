import { useOutletContext } from "react-router-dom";
import type { projectType } from "../../data/type";

const ProjectTemplate = () => {

    const context = useOutletContext<projectType | null>();

    console.log(context);

    return (
        <div>
            {context ? (
                <div>
                    <h2>{context.title}</h2>
                    <p>{context.description}</p>
                </div>
            ) : (
                <p>No project selected</p>
            )}
        </div>
    )
}

export default ProjectTemplate;