import { connect } from "react-redux";
import GroupModal from "../components/GroupModal";
import { hideGroupModal } from "../duck/actions";

const mapStateToProps = state => ({
    showModal: state.ui.showGroupModal
});

const mapDispatchToProps = (dispatch) => {
    return {
        hide: (event) => {
            console.log(event.target.className);
            if (event.target.className == "ShowModal") {
                dispatch(hideGroupModal());
            } 
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupModal);