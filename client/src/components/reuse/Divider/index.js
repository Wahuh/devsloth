import React from "react";
import styles from "./Divider.scss";

const Divider = ({ vertical }) => {
    return (
        <hr className={vertical ? styles.DividerVertical : styles.Divider} />
    );
}

export default Divider;