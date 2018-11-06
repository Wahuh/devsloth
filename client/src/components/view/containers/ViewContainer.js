import { connect } from "react-redux";
import View from "../components/View";

const mapStateToProps = state => ({
	showChat: state.ui.view.showChat,
	showTasks: state.ui.view.showTasks
});

export default connect(mapStateToProps)(View);