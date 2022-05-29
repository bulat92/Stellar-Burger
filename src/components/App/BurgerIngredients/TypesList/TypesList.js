import style from "./TypesList.module.css";
import {useState} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {littleProps} from '../../../../little-props';

const TypesList = ({ tabList}) => {
    
    const [current, setCurrent] = useState('bun');
 
    return(
        <div style={{ display: 'flex' }} className={style.list}>
            {tabList.map((el, index) => (
                <Tab className={style.listLi} key={index} value={el.name} active={current === el.name} onClick={setCurrent}>
                    {el.nameRu}
                </Tab>
            ))}
        </div>
    )
}

TypesList.propTypes = {
    tabList: PropTypes.arrayOf(littleProps.isRequired).isRequired
}
export default TypesList;