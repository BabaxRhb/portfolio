import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const GeneralLayout = () => {
		return (
			<div className="flex flex-col h-screen min-w-xs">
				<Header />
				<main className="flex-1 overflow-y-auto">
					<div className=" max-desktop:mx-10 tablet:mx-auto tablet:w-1/2">
						<Outlet />
					</div>
				</main>
				<Footer />
			</div>
		)
}

export default GeneralLayout;