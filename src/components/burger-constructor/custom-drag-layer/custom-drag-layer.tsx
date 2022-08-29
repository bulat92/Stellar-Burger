import { useDragLayer } from "react-dnd";
import type { XYCoord } from "react-dnd";
import React, { useMemo } from "react"; 
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './custom-drag-layer.module.css';



const getItemStyles = (currentOffset: XYCoord | null) => {
  if (!currentOffset) {
    return {
      display: "none",
    };
  }

  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
  };
};

export const CustomDragLayer: React.FC = () => {
  const { itemType, isDragging, item, currentOffset } = useDragLayer(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging,
    })
  );

  const renderItem = useMemo(() => {
    switch (itemType) {
      case "inConstructor":
        return (
          <div className={style.styleBorder}>
            <ConstructorElement
              isLocked={false}
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </div>
        );
      default:
        return null;
    }
  }, [itemType, item]);

  if (!isDragging) {
    return null;
  }

  return (
    <div className={style.layerStyles}>
      <div style={getItemStyles(currentOffset)}>{renderItem}</div>
    </div>
  );
};
