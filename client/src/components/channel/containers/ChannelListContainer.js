import { connect } from "react-redux";
import ChannelList from "../components/ChannelList";
import { getAllChannels } from "../duck/selectors";

function selectGroup(event) {
    event.stopPropagation();
    console.log("groupSelected");
}

const mapStateToProps = state => ({
    channels: getAllChannels(state)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);