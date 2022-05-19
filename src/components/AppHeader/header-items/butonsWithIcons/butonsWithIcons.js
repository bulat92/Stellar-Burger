import style from '../header-Items.module.css';

export default function ButonsWithIcons(props){
    return(    
        <div className = {style.boxItemsLeftChild} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
            <i className={style.profileIcon}>    
                {props.icon}
            </i>
            <p className = {style.ItemsInnerText}>{props.children}</p>
        </div>
    );
}