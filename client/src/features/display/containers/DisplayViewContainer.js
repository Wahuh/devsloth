import { connect } from "react-redux";
import DisplayView from "../components/DisplayView";

const mapStateToProps = state => ({
	displayChat: state.display.chat,
	displayTasks: state.display.tasks
});

export default connect(mapStateToProps)(DisplayView);