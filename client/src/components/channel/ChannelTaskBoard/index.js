import { connect } from "react-redux";
import { getChannelListIds } from "../../lists/duck/selectors";
import { TaskBoard } from "../../tasks/TaskBoard";
import { getSelectedChannelId } from "../duck/selectors";

const mapStateToProps = state => ({
    listIds: getChannelListIds(state),
    channelId: getSelectedChannelId(state)
});

export default connect(mapStateToProps)(TaskBoard)