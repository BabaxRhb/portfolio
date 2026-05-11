import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const GeneralLayout = () => {
    return ( 
        <div className="flex flex-col justify-center mx-auto sm:w-full md:w-1/2 h-screen">
            <div className="flex-none"><Header /></div>
            <div className="w-full overflow-auto grow"><Outlet /></div>
            <div className="flex-none"><Footer /></div>
        </div>
    )
}

export default GeneralLayout;