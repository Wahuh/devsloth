import { connect } from "react-redux";

import React, { Component } from "react";
import Typography from "../../reuse/Typography";
import SuccessIcon from "../../reuse/icons/SuccessIcon";
import styles from "./Toast.scss";
import { removeUiToast } from "../duck/actions";
import CloseButton from "../../reuse/buttons/CloseButton";
import Button from "../../reuse/Button";
import CloseIcon from "../../reuse/icons/CloseIcon";

const statuses = {
    "success": styles.Success,
    "error": styles.Failure,
}

class Toast extends Component {
    componentDidMount() {
        const { toast, onClose } = this.props;
        const { _id, duration } = toast;
        if (duration) {
            setTimeout(() => onClose(_id), 2000);
        }
    }

    render() {
        const { toast, onClose } = this.props;
        const { _id, message, status, duration } = toast;
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
}

export default connect(null, {
    onClose: removeUiToast
})(Toast);