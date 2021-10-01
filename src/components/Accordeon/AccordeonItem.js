import React from "react";
import styles from "./Accordeon.module.scss";
import { FiChevronDown } from "react-icons/fi";

const AccordeonItem = ({ item, callbackClick }) => {
  return (
    <>
      <div className={styles.accordeonItem}>
        <div
          onClick={(e) => callbackClick(e)}
          className={styles.accordeonHeader}
        >
          <h3> {item.title}</h3>
          <div className={styles.accordeonIcon}>
            {/* <FiChevronDown style={{ fontSize: 20 + "px", color: "#4ac0b0" }} /> */}
            <FiChevronDown className={styles.iconSVG} />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyConent}>
            <p className={styles.bodyContentLeft}>{item.body}</p>
            <div className={styles.bodyContentRight}>
              <img
                src={require("../../assets/img/" + item.img).default}
                alt="lol"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordeonItem;
