import style from "./TypesList.module.css";
import React from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

const TypesList = props => {
    const [current, setCurrent] = React.useState('bun')
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

export default TypesList;