import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Skill from "../pages/Skill"

import GeneralLayout from "../layouts/Layout"
import Project42 from "../pages/Project/Project42"
import ProjectPersonal from "../pages/Project/ProjectPersonnal"
import ProjectsLayout from "../pages/Project/Project"
import ProjectTemplate from "../pages/Project/ProjectTemplate"

const AppRoute = () => {
    return (
        <Routes>
            <Route element={<GeneralLayout />}>
                <Route path='/' element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skill />} />
                <Route path="/projects" element={<ProjectsLayout />}>
                    <Route index element={<Navigate to="42" replace />} />
                    <Route path="42" element={<Project42 />} />
                    <Route path="42/Likeo" element={<ProjectTemplate />} />
                    <Route path="42/Webserv" element={<ProjectTemplate />} />
                    <Route path="42/Inception" element={<ProjectTemplate />} />
                    <Route path="42/Cub3D" element={<ProjectTemplate />} />
                    <Route path="42/Minishell" element={<ProjectTemplate />} />
                    <Route path="personnal" element={<ProjectPersonal />} />
                </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default AppRoute;