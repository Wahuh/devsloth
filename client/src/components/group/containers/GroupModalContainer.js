import { connect } from "react-redux";
import GroupModal from "../components/GroupModal";
import * as constants from "../constants";
import { createGroup, hideGroupModal, changeScreen } from "../duck/actions";

const mapStateToProps = state => ({
    show: state.ui.groupModal.show,
    screen: state.ui.groupModal.screen,
});

const mapDispatchToProps = (dispatch) => ({
    hide(event) {
        console.log(event.target.className);
        if (event.target.className == "ShowModal") {
            dispatch(hideGroupModal());
        } 
    },

    changeScreen(screen) {
        dispatch(changeScreen(screen));
    },

    createGroup(groupName) {
        dispatch(createGroup(groupName));
        dispatch(hideGroupModal());
        dispatch(changeScreen(constants.CREATE_OR_JOIN_GROUP_SCREEN))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupModal);