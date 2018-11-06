import { connect } from "react-redux";
import LoginModal from "../components/LoginModal";
import { hideLoginModal, createAccount, createGuest } from "../duck/actions";

const mapStateToProps = state => ({
    showLoginModal: state.ui.loginModal.show,
    userIsLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    onHide(event) {
        dispatch(hideLoginModal());
    },
    onCreateGuest() {
        console.log("guest created");
        dispatch(createGuest());
        dispatch(hideLoginModal());
    },
    createAccount() {
        dispatch(createAccount());
        dispatch(hideLoginModal());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);