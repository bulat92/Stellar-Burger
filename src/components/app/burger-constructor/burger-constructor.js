import style from "./burger-constructor.module.css";
import { TotalAndOrderButton } from "./total-and-order-button/total-and-order-button";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../prop-types";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_INGREDIENT,
  ADD_BUN,
} from "../../../services/action/burger-constructor";
import { DotsAndConstructorElement } from "./dots-and-constructor-element/dots-and-constructor-element";

export const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const [, ref] = useDrop({
    accept: "ingredients",
    drop(item) {
      if (item.type !== "bun") {
        dispatch({
          type: ADD_INGREDIENT,
          item: {
            ...item,
            id: uuidv4()
          },
        });
      } else {
        dispatch({
          type: ADD_BUN,
          item: {
            ...item,
            id: uuidv4()
          },
        });
      }
    },
  });

  const { OrderIngredients, bun } = useSelector(
    (store) => store.burgerConstructorValues
  );

  return (
    <section className={`${style.BurgerConstructor}`} ref={ref}>
      <div className={`${style.constructorElement} mr-4`}>
        {bun.type === "bun" ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        ) : (
          <div className={style.emptyTop}>Выберите булку</div>
        )}
      </div>
      <div className={`${style.scrollWindow} mt-4 mb-4`}>
        <div
          className={`mr-2 ${style.scrollWindow_into}`}
        >
          {OrderIngredients.length !== 0 ? (
            OrderIngredients.map((el, index) => (
              <DotsAndConstructorElement el={el} key={el.id} index={index} />
            ))
          ) : (
            <div className={style.empty}>Выберите начинку</div>
          )}
        </div>
      </div>
      <div className={`${style.constructorElement} mr-4`}>
        {bun.type === "bun" ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        ) : (
          <div className={style.emptyBottom}>Выберите булку</div>
        )}
      </div>
      <TotalAndOrderButton />
    </section>
  );
};

/* BurgerConstructor.propTypes = {
  OrderIngredients : PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
} */