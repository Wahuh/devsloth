import React from "react";
import styles from "./Title.scss";

const Title = ({ children, className }) => (
    <h1 className={`${styles.Title} ${className}`}>
        {children}
    </h1>
)

export default Title;