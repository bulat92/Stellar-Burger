import style from './header-app.module.css';
import { LogoHead } from './logo-head/Logo-head';
import { HeaderItems } from './header-items/header-Items';
 
export const AppHeader = () => {
    return(
        <div className={style.underHeader}>
            <header className={style.header}>
                <LogoHead className={style.logo}/>
                <HeaderItems />
            </header>
        </div>
    );
}