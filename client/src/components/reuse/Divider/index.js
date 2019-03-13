import React from "react";
import classNames from "classnames";
import styles from "./Divider.scss";

const sizes = {
    "sm": styles.sm,
    "md": styles.md,
    "lg": styles.lg
}

const Divider = ({ vertical, horizontal, size }) => {
    return (
        <hr className={
            classNames(
                styles.Divider,
                sizes[size],
                {
                    [styles.Vertical]: vertical
                }
            )
        } />
    );
}

export default Divider;