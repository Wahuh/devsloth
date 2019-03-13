import { connect } from "react-redux";
import { getAlias } from "../../auth/duck/selectors";

import React from "react";
import Button from "../../reuse/Button";
import FloatInput from "../../reuse/FloatInput";
import Typography from "../../reuse/Typography";
import styles from "./DeleteAccount.scss";
import Form from "../../reuse/Form";
import ActionBar from "../../reuse/ActionBar";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import Column from "../../reuse/Column";

const DeleteAccount = ({ alias }) => (
    <Form maxHeight>
        <Column maxHeight maxWidth justifyContent="flex-end">
            <ActionBar>
                <LoadingButton text="Delete Account" theme="delete"  />
            </ActionBar>
        </Column>
    </Form>
);

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(DeleteAccount);