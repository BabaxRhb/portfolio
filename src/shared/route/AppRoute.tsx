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
            <Route path="/" element={<GeneralLayout><Home /></GeneralLayout>} />
            <Route path="/home" element={<GeneralLayout><Home /></GeneralLayout>} />
            <Route path="/about" element={<GeneralLayout><About /></GeneralLayout>} />
            <Route path="/projects" element={<GeneralLayout><Project /></GeneralLayout>} />
            <Route path="/skills" element={<GeneralLayout><Skill /></GeneralLayout>} />
            <Route path="/contact" element={<GeneralLayout><Contact /></GeneralLayout>} />
        </Routes>
    )
}

export default AppRoute;