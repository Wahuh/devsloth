import { connect } from "react-redux";

import React, { Component } from "react";
import Modal from "../../reuse/Modal";
import SlackerLoader from "../SlackerLoader";
import Registration from "../Registration";
import styles from "./Authentication.scss";

class Authentication extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { showAuthentication } = this.props;

        return (
            <Modal show={showAuthentication}>
                <div className={styles.Authentication}>
                    <SlackerLoader />
                    <Registration />
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    showAuthentication: state.ui.showAuthentication,
});

export default connect(mapStateToProps)(Authentication);

