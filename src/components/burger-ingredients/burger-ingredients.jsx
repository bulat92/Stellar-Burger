import { useState, useRef, useEffect } from "react";
import style from "./burger-ingredients.module.css";
import { TypesOfIngredients } from "./types-of-ingredients/types-of-ingredients";
import { TabList } from "./tab-list/tab-list";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../prop-types";
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetIngredients } from "../../services/action/burger-ingredients";

export const BurgerIngredients = () => {
  const { ingredients } = useSelector((store) => store.burgers);

  const dispatch = useDispatch();

  const mainSection = useRef(null),
    [currentTab, setCurrentTab] = useState("bun");

  const sectionScrollFunc = (tab) => {
    const element = document.getElementById(tab);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  const [bunsRef, inViewBuns] = useInView({
    threshold: 0.8,
  });
  const [saucesRef, inViewSauces] = useInView({
    threshold: 0.6,
  });
  const [mainsRef, inViewFilling] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab("bun");
    } else if (inViewSauces) {
      setCurrentTab("sauce");
    } else if (inViewFilling) {
      setCurrentTab("main");
    }
  }, [inViewBuns, inViewFilling, inViewSauces]);

  useEffect(() => {
    dispatch(fetchGetIngredients());
  }, [dispatch]);

  return (
    <section>
      <TabList
        sectuionScrollFunc={sectionScrollFunc}
        currentTab={currentTab}
      />
      {ingredients && (
        <section className={style.BurgerIngredients} ref={mainSection}>
          <TypesOfIngredients
            ref={bunsRef}
            id="bun"
            arr={ingredients.filter((el) => {
              if (el.type === "bun") return el;
            })}
          >
            Булки
          </TypesOfIngredients>

          <TypesOfIngredients
            ref={saucesRef}
            id="sauce"
            arr={ingredients.filter((el) => {
              if (el.type === "sauce") return el;
            })}
          >
            Соусы
          </TypesOfIngredients>

          <TypesOfIngredients
            ref={mainsRef}
            id="main"
            arr={ingredients.filter((el) => {
              if (el.type === "main") return el;
            })}
          >
            Начинки
          </TypesOfIngredients>
        </section>
      )}
    </section>
  );
};
/* BurgerIngredients.propTypes = {
    arr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}  */
