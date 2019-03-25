import { connect } from "react-redux";
import { removeUiModal } from "../../ui/duck/actions";

import React, { useState } from "react";
import CloseButton from "../../reuse/buttons/CloseButton";
import GroupCreateOrJoin from "../GroupCreateOrJoin";
import GroupCreateForm from "../GroupCreateForm";
import GroupJoinForm from "../GroupJoinForm";
import Modal from "../../reuse/Modal";
import { MODAL_GROUP_CREATE_OR_JOIN } from "../../ui/constants";
 


const GroupModal = ({ onHide }) => {
    const [ screen, setScreen ] = useState("createOrJoin");

    const screens = {
        createOrJoin: <GroupCreateOrJoin
                        onCreate={() => setScreen("create")} 
                        onJoin={() => setScreen("join")} 
                        />,
        create: <GroupCreateForm onBack={() => setScreen("createOrJoin")} />,
        join: <GroupJoinForm onBack={() => setScreen("createOrJoin")} />
    }

    return (
        <Modal size="md" onHide={onHide}>
            <CloseButton onClick={onHide} />
            {screens[screen]}
        </Modal>
    );
}

export default connect(null, {
    onHide: () => removeUiModal(MODAL_GROUP_CREATE_OR_JOIN)
})(GroupModal);