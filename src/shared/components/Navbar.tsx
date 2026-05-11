import { Link, useLocation } from "react-router-dom";

const navbarItems = [
  { title: "About", link: "/about" },
  { title: "Skills", link: "/skills" },
  { title: "Projects", link: "/projects" },
];

const Navbar = () => {
	const { pathname } = useLocation();

	const baseStyle = "max-sm:text-lg text-2xl font-bold mx-5 hover:scale-105 transition-all";

	return (
	  <nav className="flex items-center w-full">
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
	  </nav>
	);
};

export default Navbar;