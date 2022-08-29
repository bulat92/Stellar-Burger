import { useDragLayer } from "react-dnd";
import type { XYCoord } from "react-dnd";
import React, { CSSProperties, useMemo } from "react";
import { Cost } from "../cost/cost";
import style from "./types-of-ingredients/ingredients/ingredients.module.css";

const layerStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

const styleType: CSSProperties = {
  background: "#1C1C21",
  borderRadius: "40px",
  width: "278px",
  height: '200px',
};
const styleBorder: CSSProperties = {
  borderRadius: "40px",
  width: "282px",
  height: '204px',
  background: "linear-gradient(63.18deg, #801ab3 0%, #4c4cff 100%)",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 0 20px 1px #6633D9',
};

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
      case "ingredients":
        return (
          <div style={styleBorder}>
            <div className={style.type} style={styleType}>
              <img className={style.typesImg} src={item.image_mobile} alt="" />
              <div className={style.priceBox}>
                <Cost cost={item.price} />
              </div>
              <p className={style.typeName}>{item.name}</p>
            </div>
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
    <div style={layerStyles}>
      <div style={getItemStyles(currentOffset)}>{renderItem}</div>
    </div>
  );
};
