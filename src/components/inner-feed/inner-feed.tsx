import style from "./inner-feed.module.css";
import { OrderList } from "./order-list/order-list";
import { StatusTableRight } from "./status-table-right/status-table-right";
import { useSelector } from "../../interface-and-types/hooks";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";

export const InnerFeed = () => {
  const { orders } = useSelector((store) => store.wsFeed);

  const [current, setCurrent] = useState<string>("one"),
    [width, setWidth] = useState<number>(1280);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className={`${style.tabBox} mb-5`}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Заказы
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Статистика
        </Tab>
      </div>
      <section className={style.InnerFeed}>
        {width < 1000 ? (
          current === "one" ? (
            <OrderList
              classWidth={`${style.classWidth}`}
              arr={orders}
              statusSwitch={false}
            />
          ) : (
            <StatusTableRight />
          )
        ) : (
          <>
            <OrderList
              classWidth={style.classWidth}
              arr={orders}
              statusSwitch={false}
            />
            <StatusTableRight />{" "}
          </>
        )}
      </section>
    </>
  );
};
