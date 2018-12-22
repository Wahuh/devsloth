import { connect } from "react-redux";

import React from "react";
import ActionBar from "../../reuse/ActionBar";
import BackIcon from "../../reuse/icons/BackIcon";
import Button from "../../reuse/Button";
import Typography from "../../reuse/Typography";
import styles from "./JoinGroupForm.scss";

const JoinGroupForm = ({ onBack, onJoin }) => {
    return (
        <form className={styles.JoinGroupForm}>
            <div>
                <Typography>
                    To join a group, just paste your invite link below!
                </Typography>
            </div>

            <ActionBar>
                <Button onClick={onBack} theme="icon" type="button">
                    <BackIcon />
                </Button>
                <Button theme="action" text="Join Group" />
            </ActionBar>
        </form>
    );
}
//            <BackButton onClick={props.onBack} />
export default connect(null, {

})(JoinGroupForm);