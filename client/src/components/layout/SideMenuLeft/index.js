import React from "react";
import styles from "./SideMenuLeft.scss";

const SideMenuLeft = (props) => {
    return (
        <div id={styles.SideMenuLeft}>
            {props.children}
        </div>
    );
}

export default SideMenuLeft;