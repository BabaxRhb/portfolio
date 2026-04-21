import type { ChildrenProps } from "../data/type";
import Header from "./Header";

const GeneralLayout = ({ children } : ChildrenProps) => {
    return ( 
        <div className="flex flex-col justify-center mx-auto max-w-75">
            <Header />
            <div className="w-full overflow-auto">{children}</div>
        </div>
    )
}

export default GeneralLayout;