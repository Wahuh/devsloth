import React from "react";
import styles from "./Dropdown.scss";
import { useComponentVisible } from "../../ui/duck/hooks";

const Dropdown = ({ children }) => {
    const { ref, isComponentVisible } = useComponentVisible(true);

    return (
        <ul className={styles.Dropdown} ref={ref}>
            {isComponentVisible && children}
        </ul>
    );
}

export default Dropdown;