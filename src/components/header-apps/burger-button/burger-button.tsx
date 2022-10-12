import style from "./burger-button.module.css";

export const BurgerButton = () => {
    return(
        <div className={style.BurgerButton}>
            <div className={style.divBun}></div>
                <div className={style.divLayer}></div>
                <div className={style.divLayer}></div>
                <div className={style.divLayer}></div>
            <div className={style.divBun}></div>
        </div>
    );
}