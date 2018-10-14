import { connect } from "react-redux";
import GroupList from "../components/GroupList";
import { showGroupModal } from "../duck/actions";

function selectGroup(event) {
    event.stopPropagation();
    console.log("groupSelected");
}

const mapStateToProps = state => ({
    groups: state.groups
});

const mapDispatchToProps = (dispatch) => {
    return {
        show: () => {
            //action
            dispatch(showGroupModal());
        },
        onSelect: selectGroup,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);