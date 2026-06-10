import { createContext, useContext, useState } from "react";

const ProjectContext = createContext<{
    projectId: number | null;
    projectType: string;
    setProjectId: React.Dispatch<React.SetStateAction<number | null>>;
    setProjectType: React.Dispatch<React.SetStateAction<string>>;
}>({
    projectId: null,
    projectType: '42',
    setProjectId: () => {},
    setProjectType: () => {}
});

const ProjectProvider = ({ children }: { children: React.ReactNode }) => {

    const [ projectId, setProjectId ] = useState<number | null >(null);
    const [ projectType, setProjectType ] = useState('42');
    
	return (
		<ProjectContext.Provider value={{ projectId, setProjectId, projectType, setProjectType }}>
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