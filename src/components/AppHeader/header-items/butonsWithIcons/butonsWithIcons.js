import style from '../header-Items.module.css';
import PropTypes from 'prop-types';
import {littleProps} from '../../../../little-props';

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

ButonsWithIcons.propTypes = {
    props: PropTypes.arrayOf(littleProps)
}

export default ButonsWithIcons;