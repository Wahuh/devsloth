import { connect } from "react-redux";
import { 
    hideGroupModal,
    showGroupModalCreate,
    showGroupModalJoin,
    hideGroupModalCreate,
    hideGroupModalJoin
 } from "../duck/actions";
import { getGroupModal, getGroupModalScreens } from "../duck/selectors";

import React, { Component } from "react";
import Modal from "../../reuse/Modal";
import CreateOrJoin from "../CreateOrJoin";
import CreateGroup from "../CreateGroup";
import JoinGroup from "../JoinGroup";
import styles from "./GroupModal.scss";


class GroupModal extends Component {
    render() {
        const { 
            show, 
            screens, 
            hideGroupModal,
            showGroupModalCreate,
            showGroupModalJoin,
            hideGroupModalCreate,
            hideGroupModalJoin
        } = this.props;
        let screen;

        if (screens.showCreate) {
            screen = <CreateGroup onBack={hideGroupModalCreate} onCreate={this.props.createGroup}/>
        } else if (screens.showJoin) {
            screen = <JoinGroup onBack={hideGroupModalJoin} />
        } else {
            screen = <CreateOrJoin onCreate={showGroupModalCreate} onJoin={showGroupModalJoin}/>
        }

        return (
            <Modal show={show} onHide={hideGroupModal}>
                <div className={styles.GroupModal}>
                    {screen}
                </div>
            </Modal>
        );
    }
}



const mapStateToProps = state => ({
    show: getGroupModal(state),
    screens: getGroupModalScreens(state),
});

export default connect(mapStateToProps, {
    hideGroupModal,
    showGroupModalCreate,
    showGroupModalJoin,

})(GroupModal);