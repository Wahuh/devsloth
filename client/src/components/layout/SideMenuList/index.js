import React from "react";
import styles from "./SideMenuList.scss";

const SideMenuList = ({ children }) => (
    <div className={styles.SideMenuList}>{children}</div>
)

export default SideMenuList;