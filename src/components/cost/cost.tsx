import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

export const Cost: React.FC<{ cost: number | string }> = ({ cost }) => {
  const style = { display: "flex" };

  return (
    <div style={style}>
      <p className="text text_type_digits-default mr-2">{cost}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
};
