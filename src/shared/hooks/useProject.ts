import { useTranslation } from "react-i18next"

const useProject = () => {

    const [ t ] = useTranslation("global");

    const schoolProject = {
        context : t("project.42.title"),
        projectList : [
            { 
                title : 'LIKEO',
                content: t("project.42.projectList.likeo"),
                imgUrl: "project/likeo/likeo1.png",
                techno : ['React.js', 'Fastify', 'PostgreSQL', 'Prisma'],
                status : true
            },
            { 
                title : 'WEBSERV',
                content: t("project.42.projectList.webserv"),
                imgUrl: "project/webserv/webserv.webm",
                techno : ['C++'],
                status : true
            },
            { 
                title : 'INCEPTION',
                content: t("project.42.projectList.inception"),
                imgUrl: "project/inception/inception1.png",
                techno : ['Docker'],
                status : true
            },
            { 
                title : 'CUB3D',
                content: t("project.42.projectList.cub3D"),
                imgUrl: "project/cub3D/cub1.png",
                techno : ['C'],
                status : true
            },
            { 
                title : 'MINISHELL',
                content: t("project.42.projectList.minishell"),
                imgUrl: "project/minishell/minishell1.png",
                techno : ['C'],
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