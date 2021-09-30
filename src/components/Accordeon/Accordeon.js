import React from "react";
import AccordeonItem from "./AccordeonItem";
import styles from "./Accordeon.module.scss";
import AccordionLogic from "./AccordionLogic";
const Accordeon = ({ items }) => {
  let clickHandle = AccordionLogic();
  return (
    <>
      <div className={`${styles.accordeon} accordeon_`}>
        {items.map((item) => {
          return (
            <AccordeonItem
              callbackClick={clickHandle}
              item={item}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Accordeon;
