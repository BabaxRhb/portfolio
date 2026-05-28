import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Skill from "../pages/Skill"

import GeneralLayout from "../layouts/Layout"
import Project42 from "../pages/Project/Project42"
import ProjectPersonnal from "../pages/Project/ProjectPersonnal"
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
                    <Route path="42" element={<Project42 />}>
                        <Route path="likeo" element={<ProjectTemplate />} />
                        <Route path="webserv" element={<ProjectTemplate />} />
                        <Route path="inception" element={<ProjectTemplate />} />
                        <Route path="cub3D" element={<ProjectTemplate />} />
                        <Route path="minishell" element={<ProjectTemplate />} />
                    </Route>
                    <Route path="personnal" element={<ProjectPersonnal />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoute;