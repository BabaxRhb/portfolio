import { BrowserRouter } from 'react-router-dom';
import type { ChildrenProps } from '../data/type';

const AppProvider = ({ children } : ChildrenProps) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

export default AppProvider;