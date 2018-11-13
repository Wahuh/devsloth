import React from "react";
import ActionButton from "../../reuse/ActionButton";
import ActionBar from "../ActionBar";
import Button from "../../reuse/Button";
import Typography from "../../reuse/Typography";
import styles from "./JoinGroup.scss";

const JoinGroup = ({ onBack, onJoin }) => {
    return (
        <div className={styles.JoinGroup}>
            <div>

            </div>

            <ActionBar onBack={onBack}>
                <ActionButton text="Join" onClick={onJoin} />
            </ActionBar>
        </div>
    );
}
//            <BackButton onClick={props.onBack} />
export default JoinGroup;