import { Route, Routes } from "react-router-dom"
import type { ChildrenProps } from "../data/type"

import Header from "../layouts/Header"
import Home from "../pages/Home"
import About from "../pages/About"
import Skill from "../pages/Skill"
import Contact from "../pages/Contact"
import Project from "../pages/Project"

const GeneralLayout = ({ children } : ChildrenProps) => {
    return (
        <div className="flex flex-col justify-center mx-auto max-w-50">
            <Header />
            <div className="w-full overflow-auto">
                {children}
            </div>
        </div>
    )
}

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