import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const GeneralLayout = () => {

	const mainRef = useRef<HTMLElement>(null);
	const { pathname } = useLocation();

	useEffect(() => {
		mainRef.current?.scrollTo({
			top: 0,
			behavior: "instant",
		});
	}, [pathname]);

	return (
		<div className="flex flex-col h-screen min-w-xs">
			<Header />
			<main
				ref={mainRef}
				className="
					flex-1 overflow-y-auto pt-30 pb-20
					[&::-webkit-scrollbar]:w-2
					[&::-webkit-scrollbar-track]:rounded-full
					[&::-webkit-scrollbar-thumb]:rounded-full
					[&::-webkit-scrollbar-track]:bg-background
					[&::-webkit-scrollbar-thumb]:bg-accent/50
					dark:[&::-webkit-scrollbar-track]:bg-background
					dark:[&::-webkit-scrollbar-thumb]:bg-accent/50
				"
			>
				<div className=" max-desktop:mx-10 laptop:mx-auto laptop:w-1/2">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default GeneralLayout;