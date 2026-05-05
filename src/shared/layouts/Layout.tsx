import type { ChildrenProps } from "../data/type";
import Header from "./Header";

const GeneralLayout = ({ children } : ChildrenProps) => {
    return ( 
        <div className="flex flex-col justify-center mx-auto w-1/2">
            <Header />
            <div className="w-full overflow-auto">{children}</div>
        </div>
    )
}

export default GeneralLayout;