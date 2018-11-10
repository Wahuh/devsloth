import { connect } from "react-redux";
import TaskList from "../components/TaskList";

const mapStateToProps = state => ({
    tasks: getAllGroups(state)
});

const mapDispatchToProps = (dispatch) => ({
    show() {
        //action
        dispatch(showGroupModal());
    },
    onSelect: selectGroup,
});

export default connect()(TaskList);