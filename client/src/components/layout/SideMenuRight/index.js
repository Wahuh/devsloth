import React from "react";
import styles from "./SideMenuRight.scss";

const SideMenuRight = (props) => {
    return (
        <div className={styles.SideMenuRight}>
            {props.children}
        </div>
    );
}

export default SideMenuRight;