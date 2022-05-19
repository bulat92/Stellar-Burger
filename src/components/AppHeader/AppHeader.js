import React from 'react';
import style from './AppHeader.module.css';
import LogoHead from './logo-head/Logo-head';
import HeaderItems from './header-items/header-Items';
 
function AppHeader(){
    return(
        <header className={style.header}>
            <LogoHead className={style.logo}/>
            <HeaderItems />
        </header>
    );
}

export default AppHeader;