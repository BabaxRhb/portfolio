import { useTranslation } from "react-i18next"
import type { projectType } from "../data/type";

const useProject = () => {

    const [ t ] = useTranslation("global");

    const projectsExtracted = t("projects", { returnObjects: true }) as projectType[];

    const link = "/projects/42/";

    const schoolProject = {
        context : t("project.42.title"),
        projectList : [
            {
                ...projectsExtracted[0],
                imgUrl: "/project/likeo/likeo1.png",
                link: link + "likeo",
                status : true
            },
            { 
                ...projectsExtracted[1],
                imgUrl: "/project/webserv/webserv.webm",
                link: link + "webserv",
                status : true
            },
            { 
                ...projectsExtracted[2],
                imgUrl: "/project/inception/inception1.png",
                link: link + "inception",
                status : true
            },
            { 
                ...projectsExtracted[3],
                imgUrl: "/project/cub3D/cub1.png",
                link: link + "cub3D",
                status : true
            },
            { 
                ...projectsExtracted[4],
                imgUrl: "/project/minishell/minishell1.png",
                link: link + "minishell",
                status : true
            }
        ]
    }
    
    const persoProject = {
        context : t("project.personnal.title"),
        projectList : [
            { 
                title : 'PERIODIC TABLE',
                content: 'A fun and interactive way to learn chemistry',
                techno : ['React.js'],
                status : false
            },
            { 
                title : 'LET\'S VOTE',
                content: 'A voting and polling API',
                techno : ['MongoDB, Node.js'],
                status : false
            }
        ]
    }

    return {
        schoolProject,
        persoProject,
    }
}

export default useProject;