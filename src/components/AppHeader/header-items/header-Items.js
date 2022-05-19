import { useState } from 'react';
import style from './header-Items.module.css';
import ButonsWithIcons from './butonsWithIcons/butonsWithIcons';
import {ProfileIcon, ListIcon, BurgerIcon}  from '@ya.praktikum/react-developer-burger-ui-components';
 
function HeaderItems(){

    const [BurgerIconType, setBurgerIconType] = useState("secondary");
    const [ListIconType, setListIconType] = useState("secondary");
    const [ProfileIconType, setProfileIconType] = useState("secondary");

    return(
        <nav className={style.boxItems}>
            <div className = {style.boxItemsLeft}>
                <ButonsWithIcons icon={<BurgerIcon type={BurgerIconType} />} onMouseOver={()=> setBurgerIconType('primary')} onMouseOut={()=> setBurgerIconType('secondary')}>
                    Конструктор
                </ButonsWithIcons>
             
                <ButonsWithIcons icon={<ListIcon type={ListIconType}/>} onMouseOver={()=> setListIconType('primary')} onMouseOut={()=> setListIconType('secondary')}>
                    Лента заказов
                </ButonsWithIcons>
            </div>
                <ButonsWithIcons icon={<ProfileIcon type={ProfileIconType}/>} onMouseOver={()=> setProfileIconType('primary')} onMouseOut={()=> setProfileIconType('secondary')}>
                Личный кабинет
                </ButonsWithIcons>
        </nav>
    );
}
 
export default HeaderItems;