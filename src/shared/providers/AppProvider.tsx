import { BrowserRouter } from 'react-router-dom';
import type { ChildrenProps } from '../data/type';
import LanguageProvider from '../../feature/language/provider/LanguageProvider';

const AppProvider = ({ children } : ChildrenProps) => {
    return (
        <LanguageProvider>
             <BrowserRouter>
                {children}
            </BrowserRouter>
        </LanguageProvider>
    )
}

export default AppProvider;