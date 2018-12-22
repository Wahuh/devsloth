import { connect } from "react-redux";
import { getAlias } from "../../auth/duck/selectors";

import React from "react";
import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import Typography from "../../reuse/Typography";
import styles from "./UpdateEmail.scss";

const UpdateEmail = () => (
    <form className={styles.UpdateEmail}>
        <FloatInput 
            label="Change your email address"
            type="text"
            placeholder="Enter a new email"
            top
        />
        <Button theme="action" text="Update your email" />
    </form>
);

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(UpdateEmail);