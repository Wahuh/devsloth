import { connect } from "react-redux";

import React from "react";
import styles from "./ConnectionList.scss";

const ConnectionList = ({ connections }) => (
    <div className={styles.ConnectionList}>
        {connections.map()}
    </div>
);

export default ConnectionList;

