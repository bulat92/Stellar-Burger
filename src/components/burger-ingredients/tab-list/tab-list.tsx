import style from "./tab-list.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { tabListArray } from "../../../consts/tab-list-array";
import React from "react"; 
 
/////////////////////////////////////////////////////////////////////////////////////////// 
  declare module 'react' {
    interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    }
  }
/////////////////////////////////////////////////////////////////////////////////////////

interface TTabList {
  currentTab: string;
  sectionScrollFunc: (tab: string) => void;
}

export const TabList: React.FC<TTabList> = ({
  currentTab,
  sectionScrollFunc,
}): JSX.Element => {
  

  return (
    <div className={style.list}>
      {tabListArray.map((el: {'nameRu': string; 'name': string}, index: number) => (
        <Tab  
          key={index}
          value={el.name}
          active={currentTab === el.name}
          onClick={sectionScrollFunc}
        >
          {el.nameRu}
        </Tab>
      ))}
    </div>
  );
};