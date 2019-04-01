import { connect } from "react-redux";
import { TaskBoard } from "../../tasks/TaskBoard";
import { getUserListIds } from "../duck/selectors";

const mapStateToProps = state => ({
    listIds: getUserListIds(state)
});

export default connect(mapStateToProps)(TaskBoard)