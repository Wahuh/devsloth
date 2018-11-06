import React from "react";
import { any, arrayOf, object, func, string } from "prop-types";
import "./ListItem.scss";

const ListItem = ({ children, className }) => {
    return (
        <li className={className ? "ListItem " + className : "ListItem"}>
            {children}
        </li>
    );
}

ListItem.propTypes = {
    children: any,
    className: string,
}

export default ListItem;
