import Header from "./layouts/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"
import Project from "./pages/Project"
import Skill from "./pages/Skill"

function App() {

	return (
		<div className="container">
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
