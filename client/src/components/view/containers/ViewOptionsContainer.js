import { connect } from "react-redux";
import { showChat, showTasks } from "../duck/actions";
import ViewOptions from "../components/ViewOptions";

const mapDispatchToProps = (dispatch) => {
    return {
        toggleChat: () => {
            dispatch(showChat());
        },

        toggleTasks: () => {
            dispatch(showTasks());
        }
    }
};

export default connect(null, mapDispatchToProps)(ViewOptions);