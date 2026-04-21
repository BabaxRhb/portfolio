import { BrowserRouter } from 'react-router-dom';
import type { ChildrenProps } from '../data/type';
import LanguageProvider from '../../feature/language/provider/LanguageProvider';
import { ModeThemeProvider } from '../../feature/mode/provider/ModeThemeProvider';

const AppProvider = ({ children } : ChildrenProps) => {
    return (
        <LanguageProvider>
            <ModeThemeProvider>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </ModeThemeProvider>
        </LanguageProvider>
    )
}

export default AppProvider;