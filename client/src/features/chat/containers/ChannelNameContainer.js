import { connect } from "react-redux";
import ChannelName from "../components/Channel/ChannelName";

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ChannelName);

//    name: state.channels.byId[state.channels.current].name,