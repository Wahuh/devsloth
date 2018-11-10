import React from "react";
import "./Column.scss";

const Column = ({children, justifyContent, alignItems, className, width, height}) => {
    const style = {
        justifyContent: justifyContent,
        alignItems: alignItems,
        width: width,
        height: height,
    }

    return (
        <div style={style} className={className ? "Column " + className : "Column"}>
            {children}
        </div>
    );
}

export default Column;