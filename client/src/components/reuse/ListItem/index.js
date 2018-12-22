import React from "react";
import { any, arrayOf, object, func, string } from "prop-types";
import styles from "./ListItem.scss";

const ListItem = ({ children, className, onClick, tabIndex }) => (
    <li 
        tabIndex={tabIndex && "0"}
        onClick={onClick}
        className={className ? `${styles.ListItem} ` + className : styles.ListItem}>
        {children}
    </li>
);

ListItem.propTypes = {
    children: any,
    className: string,
}

export default ListItem;
