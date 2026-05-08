import { useTranslation } from "react-i18next";
import Container from "../components/container/Container";
import ProjectDivider from "../components/ProjectDivider";

const Project = () => {

    const [ t ] = useTranslation("global");

    const projectTheme = [
        { title : t("project.42.title"), content : t("project.42.description") },
        { title : t("project.personnal.title"), content : t("project.personnal.description") }
    ]

    return (
        <div>
            <Container direction="row">
                {
                    projectTheme.map((item, index) => (
                        <div key={index}>
                            <ProjectDivider title={item.title} content={item.content} />
                        </div>
                    ))
                }
            </Container>
        </div>
    )
}

export default Project;
