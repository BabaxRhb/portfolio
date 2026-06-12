import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ActionBtn } from "./ui/button/Btn";
import { useState } from "react";

import Menu from "src/assets/menu.svg?react";

interface NavigateLinkBtnProps {
	link: string,
	title: string,
	baseStyle: string
}

const NavigateLinkBtn = ({link, title, baseStyle} : NavigateLinkBtnProps) => {
	const { pathname } = useLocation();

	return (
		<Link 
			to={link}
			className={` ${baseStyle} ${ pathname === link ? "text-text" : "text-text-disabled"}`}
		>{title}</Link>
	)
}

const NavMenu = ({ direction} : { direction: string }) => {
	const [ t ] = useTranslation("global");
	const { pathname } = useLocation();
	const [ projectClick, setProjectClick ] = useState(false);

	const isProjectsPath = pathname.includes("projects");

	const navbarItems = [
	  { title: t("home.title"),link: "/home" },
	  { title: t("about.title"),link: "/about" },
	  { title: t("skill.title"), link: "/skills" },
	  { title: t("project.42.acro"), link: "/projects/42"},
	  { title: t("project.personal.acro"), link: "/projects/personnal"}
	];

	const directionClass = direction === "row" ? "phone:flex-row max-tablet:hidden" : "flex-col";

	const baseStyle = "font-bold mx-5 hover:scale-105 transition-all text-xl";

	return (
		<div className={`flex tablet:relative ${directionClass} w-full gap-5`}>
			<NavigateLinkBtn link={navbarItems[0].link} title={navbarItems[0].title} baseStyle={baseStyle} />
			<NavigateLinkBtn link={navbarItems[1].link} title={navbarItems[1].title} baseStyle={baseStyle} />
			<NavigateLinkBtn link={navbarItems[2].link} title={navbarItems[2].title} baseStyle={baseStyle} />
			<div
				className={`
					${ isProjectsPath ? "text-text" : "text-text-disabled"}
					flex flex-col
				`}
			>
				<button
					className={`max-tablet:text-left mb-5 text-xl ${baseStyle}`}
					onClick={() => setProjectClick(prev => !prev)
					}>{t("project.title")}</button>
				{
					projectClick &&
						<div className="flex flex-col w-fit gap-5 tablet:absolute tablet:top-10 z-100 bg-background/75 backdrop-blur-md rounded-md">
							<NavigateLinkBtn link={navbarItems[3].link} title={navbarItems[3].title} baseStyle={baseStyle} />
							<NavigateLinkBtn link={navbarItems[4].link} title={navbarItems[4].title} baseStyle={baseStyle} />
						</div>
				}
			</div>
			{ projectClick && <div className="fixed w-full h-screen top-0 left-0" onClick={() => setProjectClick(false)}></div>}
		</div>	
	)
}

const Navbar = () => {
	const [ menuClick, setMenuClick ] = useState(false);

	return (
		<nav>
			<NavMenu direction="row"/>
			<div className="tablet:hidden block hover:scale-110 transition-all">
				<ActionBtn Icon={Menu} onClick={() => { setMenuClick(prev => !prev)}} />
			</div>
			{ menuClick &&
				<div className="absolute top-15 left-0 w-full p-4 bg-background/75 shadow-md z-5 tablet:hidden">
					<NavMenu direction="column"/>
				</div>
			}
			{ menuClick && <div className="fixed w-full h-screen left-0" onClick={() => setMenuClick(false)}></div>}
		</nav>
	);
};

export default Navbar;