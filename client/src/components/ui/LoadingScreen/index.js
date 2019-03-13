import React from "react";
import FetchingMessage from "../../reuse/FetchingMessage";
import Spinner from "../../reuse/Spinner";
import Typography from "../../reuse/Typography";
import styles from "./LoadingScreen.scss";

const LoadingScreen = () => (
    <div className={styles.LoadingScreen}>
        <Spinner spin={true} />
        <FetchingMessage message="Loading your data" />
    </div>
);

export default LoadingScreen;