import React from "react";
import classNames from "classnames";
import Button from "../../Button";
import styles from "./LoadingButton.scss";
import Spinner from "../../Spinner";
import Typography from "../../Typography";

const LoadingButton = ({ isLoading, text, onClick, theme }) => (
    <span className={styles.LoadingButton}>
        <Button disabled={isLoading} size="md" theme={theme} onClick={onClick}>
            <span className={isLoading ? styles.Hidden : styles.Visible}> 
                <Typography type="body">
                    {text}
                </Typography>
            </span>
        </Button>
        {isLoading && <span className={styles.SpinnerWrapper}>
            <Spinner spin="true" size="sm" />
        </span>}
    </span>
)

export default LoadingButton;