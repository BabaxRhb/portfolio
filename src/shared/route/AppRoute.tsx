import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Skill from "../pages/Skill"
import Contact from "../pages/Contact"
import Project from "../pages/Project"

import GeneralLayout from "../layouts/Layout"



const AppRoute = () => {
    return (
        <Routes>
            <Route element={<GeneralLayout />}>
                <Route path='/' element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/skills" element={<Skill />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default AppRoute;