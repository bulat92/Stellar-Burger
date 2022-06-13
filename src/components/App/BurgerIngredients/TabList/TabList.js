import style from "./TabList.module.css";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { tabListArray } from '../../../../consts/tabListArray';

export const TabList = ({ currentTab, sectuionScrollFunc}) => {
 
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