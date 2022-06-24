import style from "./dots-and-constructor-element.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  DELETE_INGREDIENT,
  SORT_INGREDIENT,
} from "../../../services/action/burger-constructor";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../prop-types";

export const DotsAndConstructorElement = ({ el, index }) => {
  const ref = useRef(null);

  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: "inConstructor",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      // Не заменяйте предметы сами собой

      if (dragIndex === hoverIndex) {
        return;
      }
      // Определить прямоугольник на экране
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      //Получить вертикальную середину
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Определить положение мыши
      const clientOffset = monitor.getClientOffset();
      //Получить пиксели вверху
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Выполняйте перемещение только тогда, когда мышь пересекла половину высоты элементов.
      // При перетаскивании вниз двигаться только тогда, когда курсор находится ниже 50%
      // При перетаскивании вверх двигайтесь только тогда, когда курсор находится выше 50%
      // Перетаскивание вниз
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
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

  const [, drag] = useDrag({
    type: "inConstructor",
    item: () => {
      return { id: el._id, index };
    },
  });

  drag(drop(ref));

  return (
    <div className={style.dotsAndConstructorElement} ref={ref} key={el.id}>
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

DotsAndConstructorElement.propTypes = {
  el : PropTypes.shape(ingredientPropType.isRequired).isRequired,
}