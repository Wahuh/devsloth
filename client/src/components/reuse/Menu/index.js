import React from "react";
import { any, arrayOf, object, func, string } from "prop-types";
import styles from "./Menu.scss";

const Menu = ({ children, className, itemComponent, items }) => (
    <ul className={className ? `${styles.Menu} ` + className : styles.Menu}>
        {children}
    </ul>
);

Menu.propTypes = {
    children: any,
    className: string,
    items: arrayOf(object),
    itemComponent: func,
}

export default Menu;
