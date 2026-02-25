import Header from "./layouts/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"
import Project from "./pages/Project"
import Skill from "./pages/Skill"

function App() {

	return (
		<div className="container flex flex-col items-center justify-center w-full">
			<Header />
			<Hero />
			<About />
			<Skill />
			<Project />
			<Contact />
		</div>
	)
}

export default App
