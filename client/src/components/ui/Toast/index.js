import { connect } from "react-redux";

import React, { useEffect } from "react";
import Typography from "../../reuse/Typography";
import styles from "./Toast.scss";
import { removeUiToast } from "../duck/actions";
import Button from "../../reuse/Button";
import CloseIcon from "../../reuse/icons/CloseIcon";

const statuses = {
    "success": styles.Success,
    "error": styles.Failure,
}

const Toast = ({ toast, onClose }) => {
    const { _id, duration, status, message } = toast;
    useEffect(() => {
        if (duration) {
            setTimeout(() => onClose(_id), 2000);
        }
    }, []);

    return (
        <div className={styles.Toast}>
            <div className={`${styles.Status} ${statuses[status]}`}>
            </div>
            <div className={styles.Message}>
                <Typography color="secondary">
                    {message}
                </Typography>
            </div>
            {!duration && 
                <Button theme="icon" onClick={() => onClose(_id)}>
                    <CloseIcon />
                </Button>
            }
        </div>
    );
}

export default connect(null, {
    onClose: removeUiToast
})(Toast);