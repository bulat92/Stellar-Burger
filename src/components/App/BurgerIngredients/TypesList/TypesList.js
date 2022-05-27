import style from "./TypesList.module.css";
import {useState} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {littleProps} from '../../../../little-props';

const TypesList = props => {
    const [current, setCurrent] = useState('bun');

    const clickFunc = () => {
        
    }

    return(
        <div style={{ display: 'flex' }} className={style.list}>
            {props.list.map(el => (
                <Tab className={style.listLi} key={el.id} value={el.name} active={current === el.name} onClick={setCurrent}>
                    {el.nameRu}
                </Tab>
            ))}
        </div>
    )
}

TypesList.propTypes = {
    list: PropTypes.arrayOf(littleProps.isRequired).isRequired
}
export default TypesList;