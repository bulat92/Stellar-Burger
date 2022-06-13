import style from './AppHeader.module.css';
import { LogoHead } from './logo-head/Logo-head';
import { HeaderItems } from './header-items/header-Items';
 
export const AppHeader = () => {
    return(
        <header className={style.header}>
            <LogoHead className={style.logo}/>
            <HeaderItems />
        </header>
    );
}