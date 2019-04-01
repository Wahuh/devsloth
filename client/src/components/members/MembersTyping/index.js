import { connect } from "react-redux";

import React from "react";
import { getMembersTypingAliases } from "../duck/selectors";
import styles from "./MembersTyping.scss";
import Typography from "../../reuse/Typography";

const generateTypingText = aliases => {
    if (aliases.length == 1) {
        return `${aliases.join()} is typing...`;
    } else if (aliases.length > 1 && aliases.length < 4) {
        return `${aliases.join(", ")} are typing...`
    } else if (aliases.length >= 4) {
        const [ alias1, alias2, alias3 ] = aliases;
        return `${[alias1, alias2, alias3].join(", ")} and ${aliases.length - 3} other${aliases.length >= 5 ? "s are" : " is"} typing...`
    }
}


const MembersTyping = ({ aliases }) => (
    aliases ? (
        <div className={styles.MembersTyping}>
            <Typography 
                color="primary" 
                type="caption" 
                text={generateTypingText(aliases)} 
            />
        </div>
    ) : null
)

const mapStateToProps = state => ({
    aliases: getMembersTypingAliases(state)
});

export default connect(mapStateToProps)(MembersTyping);