import React from "react";
import FetchingMessage from "../../reuse/FetchingMessage";
import Spinner from "../../reuse/Spinner";
import styles from "./AppLoader.scss";

const AppLoader = () => (
    <div className={styles.AppLoader}>
        <Spinner spin={true} />
        <FetchingMessage message="Loading your data" />
    </div>
);

export default AppLoader;