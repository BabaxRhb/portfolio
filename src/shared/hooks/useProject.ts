import { useTranslation } from "react-i18next"
import type { projectType } from "../data/type";

const useProject = () => {

    const [ t ] = useTranslation("global");

    const schoolProjectList = t("projects.42", { returnObjects: true }) as projectType[];
    const personnalProjectList = t("projects.personnal", { returnObjects: true }) as projectType[];

    const rootLink = "/projects/";

    const schoolProject = {
        context : t("project.42.title"),
        projectList : [
            {
                ...schoolProjectList[0],
                link: rootLink + "42/" + "likeo",
                imgUrl: [
                    "/project/likeo/likeo1.png",
                    "/project/likeo/likeo2.png",
                    "/project/likeo/likeo3.png",
                    "/project/likeo/likeo4.png",
                    "/project/likeo/likeo5.png",
                ],
                status : true
            },
            { 
                ...schoolProjectList[1],
                link: rootLink + "42/" + "webserv",
                imgUrl: [
                    "/project/webserv/webserv1.png",
                    "/project/webserv/webserv2.png",
                    "/project/webserv/webserv3.png",
                    "/project/webserv/webserv4.png"
                ],
                status : true
            },
            { 
                ...schoolProjectList[2],
                link: rootLink + "42/" + "inception",
                imgUrl: [
                    "/project/inception/inception1.png"
                ],
                status : true
            },
            { 
                ...schoolProjectList[3],
                imgUrl: [
                    "/project/cub3D/cub1.png",
                    "/project/cub3D/cub2.png"                ],
                link: rootLink + "42/" + "cub3D",
                status : true
            },
            { 
                ...schoolProjectList[4],
                imgUrl: [
                    "/project/minishell/minishell1.png",
                    "/project/minishell/minishell2.png"
                ],
                link: rootLink + "42/" + "minishell",
                status : true
            }
        ]
    }
    
    const persoProject = {
        context : t("project.personal.title"),
        projectList : [
            { 
                ...personnalProjectList[0],
                link: rootLink + "personal/" + "periodicTable",
                status : false
            },
            { 
                ...personnalProjectList[1],
                link: rootLink + "personal/" + "voteApi",
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