import React from "react";
import SuccessMessage from "../SuccessMessage";
import ErrorMessage from "../ErrorMessage";
import Typography from "../Typography";
import styles from "./ValidationMessage.scss";

const ValidationMessage = ({ validation }) => {
    console.log(validation);
    const { error, success, message} = validation;
    let validationMessage;

    if (error) {
        validationMessage = <ErrorMessage message={message} />
    } else if (success) {
        validationMessage = <SuccessMessage message={message} />
    } else {
        validationMessage = (
            <div className={styles.ValidationMessage}>
                <Typography type="button">Not yet validated</Typography>
            </div>
        )
    }
    
    return (
        validationMessage
    );
} 

export default ValidationMessage;