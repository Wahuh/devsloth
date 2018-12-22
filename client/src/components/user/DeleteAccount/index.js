import { connect } from "react-redux";
import { getAlias } from "../../auth/duck/selectors";

import React from "react";
import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import Typography from "../../reuse/Typography";
import styles from "./DeleteAccount.scss";

const DeleteAccount = ({ alias }) => (
    <form className={styles.DeleteAccount}>
        <Button theme="delete" text="Delete your account" />
    </form>
);

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(DeleteAccount);