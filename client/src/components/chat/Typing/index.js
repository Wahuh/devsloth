import { connect } from "react-redux";
import { getAllTypingAliases } from "../../members/duck/selectors";

import React from "react";
import Typography from "../../reuse/Typography";
import styles from "./Typing.scss";

const Typing = ({ aliases }) => (
    <div className={aliases.length > 0 ? styles.Typing : styles.NoTyping}>
        <Typography color="primary" type="caption">
            {aliases.length > 0 ? 
                aliases.length > 1 ? `${aliases.join(", ")} are typing...` : `${aliases.join()} is typing...` 
                : "nobody is typing"}
        </Typography>
    </div>
);

const mapStateToProps = state => ({
    aliases: getAllTypingAliases(state)
});

export default connect(mapStateToProps)(Typing);