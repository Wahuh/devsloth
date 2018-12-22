import { connect } from "react-redux";
import { getUsername } from "../../auth/duck/selectors";

import React from "react";
import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import Typography from "../../reuse/Typography";
import styles from "./ChangeUsername.scss";

const ChangeUsername = ({ username }) => (
    <form className={styles.ChangeUsername}>
        <Typography type="body">Your current username <strong>{username}</strong>.</Typography>
        <FloatInput 
            label="Change your username"
            type="text"
            placeholder="Enter a new username"
            top
        />
        <Button theme="action" text="Save" />
    </form>
);

const mapStateToProps = state => ({
    username: getUsername(state)
});

export default connect(mapStateToProps)(ChangeUsername);