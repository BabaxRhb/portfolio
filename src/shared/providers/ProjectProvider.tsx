import { createContext, useContext, useState } from "react";
import type { projectType } from "../data/type";

const ProjectContext = createContext<{
    selectedProject: projectType | null;
    setSelectedProject: React.Dispatch<React.SetStateAction<projectType | null>>;
}>({
    selectedProject: null,
    setSelectedProject: () => {}
});

const ProjectProvider = ({ children }: { children: React.ReactNode }) => {

    const [ selectedProject, setSelectedProject ] = useState<projectType | null >(null);
    
	return (
		<ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
			{children}
		</ProjectContext.Provider>
	)
}

const useSelectedProject = () => {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error("useSelectedProject must be used within a ProjectProvider");
    }
    return context;
}


export { ProjectContext, ProjectProvider, useSelectedProject };