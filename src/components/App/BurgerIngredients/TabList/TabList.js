import style from "./TabList.module.css";
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {littleProps} from '../../../../little-props';

const TabList = ({ tabListArray, currentTab, sectuionScrollFunc}) => {
 
    return(
        <div style={{ display: 'flex' }} className={style.list}>
            {tabListArray.map((el, index) => (
                <Tab className={style.listLi} key={index} value={el.name} active={currentTab === el.name} onClick={sectuionScrollFunc}>
                    {el.nameRu}
                </Tab>
            ))} 
        </div>
    )
}

TabList.propTypes = {
    tabListArray: PropTypes.arrayOf(littleProps.isRequired).isRequired
}
export default TabList;