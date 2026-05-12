import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const GeneralLayout = () => {
    return (
<div className="flex flex-col h-screen">
  <Header />
  <main className="flex-1 overflow-y-auto">
    <div className="mx-auto sm:w-full md:w-1/2">
      <Outlet />
    </div>
  </main>
  <Footer />
</div>
    )
}

export default GeneralLayout;