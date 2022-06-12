import style from '../header-Items.module.css';

const ButonsWithIcons = (props) => {
    return(    
        <div className = {style.boxItemsLeftChild} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
            <i className={style.profileIcon}>    
                {props.icon}
            </i>
            <a className = {style.ItemsInnerText}>{props.children}</a>
        </div>
    );
}
 
export default ButonsWithIcons;