import React, { useState } from "react";
import CloseButton from "../../reuse/buttons/CloseButton";
import GroupCreateOrJoin from "../GroupCreateOrJoin";
import GroupCreateForm from "../GroupCreateForm";
import GroupJoinForm from "../GroupJoinForm";
import Modal from "../../reuse/Modal";

const GroupModal = ({ onHide, in: inProp }) => {
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
        <Modal size="md" onHide={onHide} in={inProp}>
            <CloseButton onClick={onHide} />
            {screens[screen]}
        </Modal>
    );
}

export default GroupModal;