import { connect } from "react-redux";
import { displayChat, displayTasks } from "../duck/actions";
import DisplayOptions from "../components/DisplayOptions";

const mapDispatchToProps = (dispatch) => {
    return {
        toggleChat: () => {
            dispatch(displayChat());
        },

        toggleTasks: () => {
            dispatch(displayTasks());
        }
    }
};

export default connect(null, mapDispatchToProps)(DisplayOptions);