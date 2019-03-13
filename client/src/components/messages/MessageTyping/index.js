import { connect } from "react-redux";
import { getAllTypingAliases } from "../../members/duck/selectors";

import React from "react";
import Typography from "../../reuse/Typography";
import styles from "./MessageTyping.scss";

const MessageTyping = ({ aliases }) => (
    <div className={aliases ? styles.MessageTyping : styles.NoMessageTyping}>
        <Typography color="primary" type="caption">
            {aliases ? 
                aliases.length > 1 ? `${aliases.join(", ")} are MessageTyping...` : `${aliases.join()} is MessageTyping...` 
                : "nobody is MessageTyping"}
        </Typography>
    </div>
);

const mapStateToProps = state => ({
    aliases: getAllTypingAliases(state)
});

export default connect(mapStateToProps)(MessageTyping);