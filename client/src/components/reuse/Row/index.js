import React from "react";
import "./Row.scss";

const Row = ({children, justifyContent, alignItems, className, width}) => {
    const style = {
        justifyContent: justifyContent,
        alignItems: alignItems,
        width: width,
    }

    return (
        <div style={style} className={className ? "Row " + className : "Row"}>
            {children}
        </div>
    );
}

export default Row;