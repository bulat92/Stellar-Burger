import style from "./BurgerConstructor.module.css";
import TotalAndOrderButton from "./TotalAndOrderButton/TotalAndOrderButton";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../prop-types";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_INGREDIENT,
  ADD_BUN,
  DELETE_INGREDIENT,
} from "../../../services/action/BurgerConstructor";
import {
  INCREASE_INGREDIENT,
  DECREASE_INGREDIENT
} from '../../../services/action/burgerIngredients'

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const [, ref] = useDrop({
    accept: "ingredients",
    drop(item) {
      if (item.type !== "bun") {
        dispatch({
          type: ADD_INGREDIENT,
          item: item,
        });
        dispatch({
          type: INCREASE_INGREDIENT,
          id: item._id
        })
      } else {
        dispatch({
          type: ADD_BUN,
          item: item,
        });
      }
    },
  });

  const { OrderIngredients, bun } = useSelector(
    (store) => store.BurgerConstructor
  );

  return (
    <section className={`${style.BurgerConstructor}`} ref={ref}>
      <div className={`${style.outDotsConstructorElement} mr-4`}>
        <ConstructorElement
          type="top"
          key={uuidv4()}
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
      </div>
      <div className={`${style.scrollWindow} mt-4 mb-4`}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          className="mr-2"
        >
          {OrderIngredients.map((el, index) => (
            <div className={style.dotsAndConstructorElement} key={index}>
              <DragIcon type="primary" />
              <ConstructorElement
                isLocked={false}
                text={el.name}
                price={el.price}
                thumbnail={el.image_mobile}
                handleClose={() => {
                  dispatch({ type: DELETE_INGREDIENT, index: index });
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`${style.outDotsConstructorElement} mr-4`}>
        <ConstructorElement
          key={uuidv4()}
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
      </div>
      <TotalAndOrderButton />
    </section>
  );
};

/* BurgerConstructor.contextTypes = {
  OrderIngredients : PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
} */

export default BurgerConstructor;
