import { useState, useRef, useEffect, FC } from "react";
import style from "./burger-ingredients.module.css";
import { TypesOfIngredients } from "./types-of-ingredients/types-of-ingredients";
import { TabList } from "./tab-list/tab-list"; 
import { useInView } from "react-intersection-observer";
import { useSelector } from "../../interface-and-types/hooks"; 
import { IIngredient } from '../../interface-and-types/interface';
import { CustomDragLayer } from './custom-drag-layer';
import { Preloader } from '../preloader/preloader';


export const BurgerIngredients:FC = () => {
 
  const { ingredients, ingredientsRequest } = useSelector((store: any) => store.burgers);
 
  const mainSection = useRef(null),
    [currentTab, setCurrentTab] = useState("bun");

  const sectionScrollFunc = (tab: string): void => {
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
 

  return (
    <section>
      <CustomDragLayer />
      <TabList sectionScrollFunc={sectionScrollFunc} currentTab={currentTab} />
      {!ingredientsRequest ? (
        <section className={style.BurgerIngredients} ref={mainSection}>
          <TypesOfIngredients
            ref={bunsRef}
            id="bun"
            arr={ingredients.filter((el: IIngredient) => {
              if (el.type === "bun") return el;
            })}
          >
            Булки
          </TypesOfIngredients>

          <TypesOfIngredients
            ref={saucesRef}
            id="sauce"
            arr={ingredients.filter((el: IIngredient) => {
              if (el.type === "sauce") return el;
            })}
          >
            Соусы
          </TypesOfIngredients>

          <TypesOfIngredients
            ref={mainsRef}
            id="main"
            arr={ingredients.filter((el: IIngredient) => {
              if (el.type === "main") return el;
            })}
          >
            Начинки
          </TypesOfIngredients>
        </section>
      ) : <Preloader/>}
    </section>
  );
}; 