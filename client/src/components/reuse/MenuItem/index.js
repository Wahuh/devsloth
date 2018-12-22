import React from "react";
import { any, arrayOf, object, func, string } from "prop-types";
import styles from "./MenuItem.scss";

const MenuItem = ({ children, id, onClick, active }) => (
    <li 
        onClick={onClick}
        key={id} 
        className={active ? `${styles.MenuItem} ${styles.MenuItemActive}` : styles.MenuItem}>
        {children}
    </li>
);

MenuItem.propTypes = {
    children: any,
    className: string,
}

export default MenuItem;
