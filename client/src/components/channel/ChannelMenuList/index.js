import React from "react";
import styles from "./ChannelMenuList.scss";

const ChannelMenuList = ({ children }) => (
    <span className={styles.ChannelMenuList}>
        {children}
    </span>
)

export default ChannelMenuList;