import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

/** TO DO : Work on the project menu and responsivity */

const Navbar = () => {
	const [ t ] = useTranslation("global");
	const { pathname } = useLocation();
	
	const navbarItems = [
	  { title: t("about.title"),link: "/about" },
	  { title: t("skill.title"), link: "/skills" },
	];

	const projectPath = [ "/projects/42", "project/personnal"]

	const baseStyle = "max-sm:text-lg text-2xl font-bold mx-5 hover:scale-105 transition-all";

	return (
	  <nav className="flex items-center w-full">
		<div className="flex flex-row">
			<div>
				{navbarItems.map((item) => {
				const isActive = pathname === item.link;
		
				return (
					<Link 
						key={item.link} to={item.link}
						className={` ${baseStyle} ${ isActive ? "text-text" : "text-text-disabled"}`}
					>
					{item.title}
					</Link>
				);
				})}
			</div>
			<div
				onClick={() => console.log("Clicked")}
				className={` ${baseStyle} ${ pathname === projectPath[0] || pathname == projectPath[1] ? "text-text" : "text-text-disabled"}`}
			>{t("project.title")}</div>
			<div></div>
		</div>
	  </nav>
	);
};

export default Navbar;