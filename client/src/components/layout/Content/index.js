import React from "react";
import Column from "../../reuse/Column";
import styles from "./Content.scss";

const Content = ({ children }) => (
    <Column width="100%" height="100%">
        {children}
    </Column>
);

export default Content;