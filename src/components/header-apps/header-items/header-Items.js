import { useState } from 'react';
import style from './header-Items.module.css';
import { ButtonsWithIcons } from './buttons-with-icons/buttons-with-icons';
import {ProfileIcon, ListIcon, BurgerIcon}  from '@ya.praktikum/react-developer-burger-ui-components';
 
export const HeaderItems = () => {

    const [BurgerIconType, setBurgerIconType] = useState("secondary");
    const [ListIconType, setListIconType] = useState("secondary");
    const [ProfileIconType, setProfileIconType] = useState("secondary");

    return(
        <nav className={style.nav}>
            <div className = {style.boxItems}>
                <ButtonsWithIcons icon={<BurgerIcon type={BurgerIconType} />} onMouseOver={()=> setBurgerIconType('primary')} onMouseOut={()=> setBurgerIconType('secondary')}>
                    Конструктор
                </ButtonsWithIcons>
             
                <ButtonsWithIcons icon={<ListIcon type={ListIconType}/>} onMouseOver={()=> setListIconType('primary')} onMouseOut={()=> setListIconType('secondary')}>
                    Лента заказов
                </ButtonsWithIcons>
            </div>
                <ButtonsWithIcons icon={<ProfileIcon type={ProfileIconType}/>} onMouseOver={()=> setProfileIconType('primary')} onMouseOut={()=> setProfileIconType('secondary')}>
                Личный кабинет
                </ButtonsWithIcons>
        </nav>
    );
}