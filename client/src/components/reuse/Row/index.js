import React from "react";
import styles from "./Row.scss";

const Row = ({children, justifyContent, alignItems, className, width, height}) => {
    const style = {
        justifyContent: justifyContent,
        alignItems: alignItems,
        width: width,
        height: height,
    }

    return (
        <div style={style} className={className ? `${styles.Row} ` + className : styles.Row}>
            {children}
        </div>
    );
}

export default Row;