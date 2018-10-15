import { connect } from "react-redux";
import GroupList from "../components/GroupList";
import { showGroupModal } from "../duck/actions";
import { getAllGroups } from "../duck/selectors";

function selectGroup(event) {
    event.stopPropagation();
    console.log("groupSelected");
}

const mapStateToProps = state => ({
    groups: getAllGroups(state)
});

const mapDispatchToProps = (dispatch) => ({
    show() {
        //action
        dispatch(showGroupModal());
    },
    onSelect: selectGroup,
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);