import style from "./tab-list.module.css";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { tabListArray } from '../../../../consts/tab-list-array';

export const TabList = ({ currentTab, sectuionScrollFunc}) => {
 
    return(
        <div className={style.list}>
            {tabListArray.map((el, index) => (
                <Tab className={style.listLi} key={index} value={el.name} active={currentTab === el.name} onClick={sectuionScrollFunc}>
                    {el.nameRu}
                </Tab>
            ))} 
        </div>
    )
}