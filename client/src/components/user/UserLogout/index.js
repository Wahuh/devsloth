import { connect } from "react-redux";

import React from "react";
import SettingsLayout from "../../layout/SettingsLayout";
import { logoutAuth } from "../../auth/duck/actions";
import ActionBar from "../../reuse/ActionBar";
import LoadingButton from "../../reuse/buttons/LoadingButton";
import Column from "../../reuse/Column";
import { getIsFetching } from "../../ui/duck/selectors";

const UserLogout = ({ onLogout, isFetching }) => (
    <Column maxWidth maxHeight justifyContent="flex-end">
        <ActionBar>
            <LoadingButton isLoading={isFetching} onClick={onLogout} text="Logout" theme="action" />
        </ActionBar>
    </Column>
);

const mapStateToProps = state => ({
    isFetching: getIsFetching(state, "userLogout")
});

export default connect(mapStateToProps, {
    onLogout: logoutAuth
})(UserLogout);