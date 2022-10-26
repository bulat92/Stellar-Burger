import style from "./page-header.module.css";
import React from 'react';

export const PageHeader: React.FC<{children: string}> = ({children}) => {
  return (
    <div className={style.headerOnMain}>
      <h1 className={style.childrenH}>{children}</h1>
    </div>
  );
};
