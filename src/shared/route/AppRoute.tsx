import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Skill from "../pages/Skill"

import GeneralLayout from "../layouts/Layout"
import Project42 from "../pages/Project/Project42"
import ProjectPersonnal from "../pages/Project/ProjectPersonnal"

const AppRoute = () => {
    return (
        <Routes>
            <Route element={<GeneralLayout />}>
                <Route path='/' element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects">
                    <Route index element={<Navigate to="42" replace />} />
                    <Route path="42" element={<Project42 />} />
                    <Route path="personnal" element={<ProjectPersonnal />} />
                </Route>
                <Route path="/skills" element={<Skill />} />
            </Route>
        </Routes>
    )
}

export default AppRoute;