import style from './menu-button.module.css';

export const MenuButton = () => {
    return(
        <div className={style.MenuButton}>
            <div className={style.layer}></div>
            <div className={style.layer}></div>
            <div className={style.layer}></div>
        </div>
    )
}