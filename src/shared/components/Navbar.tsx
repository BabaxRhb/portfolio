import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Menu from "src/assets/menu.svg?react";
import { ActionBtn } from "./ui/button/Btn";
import { useState } from "react";

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

const Navbar = () => {
	const [ t ] = useTranslation("global");
	const { pathname } = useLocation();
	const [ projectClick, setProjectClick ] = useState(false);
	const [ menuClick, setMenuClick ] = useState(false);

	const isMobile = window.innerWidth <= 420;
	
	const navbarItems = [
	  { title: t("about.title"),link: "/about" },
	  { title: t("skill.title"), link: "/skills" },
	  { title: t("project.42.acro"), link: "/projects/42"},
	  { title: t("project.personnal.acro"), link: "/projects/personnal"}
	];

	const baseStyle = "phone:text-2xl text-lg font-bold mx-5 hover:scale-105 transition-all";

	return (
	  <nav>
		<div className="flex phone:flex-row flex-col">
			<div className="phone:hidden block">
				<ActionBtn Icon={Menu} onClick={() => setMenuClick(!menuClick)}/>
			</div>
			{
				(isMobile && menuClick) || (!isMobile) &&  
				<div className="flex flex-col phone:flex-row w-full">
					<NavigateLinkBtn link={navbarItems[0].link} title={navbarItems[0].title} baseStyle={baseStyle} />
					<NavigateLinkBtn link={navbarItems[1].link} title={navbarItems[1].title} baseStyle={baseStyle} />
					<div
						onClick={() => setProjectClick(!projectClick)}
						className={`
							${baseStyle} ${pathname.includes("projects") ? "text-text" : "text-text-disabled"}
							flex flex-col
						`}
					>
						{t("project.title")}
						{
							projectClick && 
								<div className="flex flex-col w-full">
									<NavigateLinkBtn link={navbarItems[2].link} title={navbarItems[2].title} baseStyle={baseStyle} />
									<NavigateLinkBtn link={navbarItems[3].link} title={navbarItems[3].title} baseStyle={baseStyle} />
								</div>
						}
					</div>
			</div>
			}
		</div>
	  </nav>
	);
};

export default Navbar;