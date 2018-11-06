import React from "react";
import { any, arrayOf, object, func, string } from "prop-types";
import "./List.scss";

const List = ({ children, className, itemComponent, items }) => {
    // const listItems = items.map(
    //     item => <itemComponent />
    // );

    return (
        <ul className={className ? "List " + className : "List"}>
            {children}
        </ul>
    );
}

List.propTypes = {
    children: any,
    className: string,
    items: arrayOf(object),
    itemComponent: func,
}

export default List;
