import style from "./dots-and-constructor-element.module.css";
import type { Identifier, XYCoord } from "dnd-core";
import React, { useRef, useEffect } from "react";
import { useDispatch } from "../../../interface-and-types/hooks";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  DELETE_INGREDIENT,
  SORT_INGREDIENT,
} from "../../../services/action/burger-constructor";
import { useDrag, useDrop } from "react-dnd";
import { IIngredient } from "../../../interface-and-types/interface";
import { getEmptyImage } from 'react-dnd-html5-backend';


interface TDotsAndConstructorElement {
  el: IIngredient;
  index: number;
}

export const DotsAndConstructorElement: React.FC<
  TDotsAndConstructorElement
> = ({ el, index }): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const [{ handlerId }, drop] = useDrop<
    IIngredient & { index: number },
    void,
    { handlerId: Identifier | null }
  >({
    accept: "inConstructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: IIngredient & { index: number }, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex: number = item.index;
      const hoverIndex: number = index;
      // Не заменяйте предметы сами собой

      if (Number(dragIndex) === hoverIndex) {
        return;
      }
      // Определить прямоугольник на экране
      const hoverBoundingRect: DOMRect = ref.current?.getBoundingClientRect();
      //Получить вертикальную середину
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Определить положение мыши
      const clientOffset = monitor.getClientOffset();
      //Получить пиксели вверху

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      //Перетаскивание вниз
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Перетаскивание вверх
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Время, чтобы фактически выполнить действие
      dispatch({
        type: SORT_INGREDIENT,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      });
      // Примечание: здесь мы изменяем элемент монитора!
      // Вообще лучше избегать мутаций,
      // но здесь хорошо ради производительности
      // чтобы избежать дорогостоящего поиска по
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: "inConstructor",
    item: () => {
      return { id: el._id, index, name: el.name, price: el.price, image: el.image_mobile };
    },
    collect: (monitor ) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [index, preview])

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));
  

  return (
    <div
      className={style.dotsAndConstructorElement}
      ref={ref}
      style={{ ...style, opacity }}
      data-handler-id={handlerId}
      data-test-number={`constructorElement${index}`}
      data-test='constructorElement'
    >
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
  );
};
