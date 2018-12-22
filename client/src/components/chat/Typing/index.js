import { connect } from "react-redux";
import { getIsTyping } from "../duck/selectors";

import React from "react";
import Typography from "../../reuse/Typography";
import styles from "./Typing.scss";


const Typing = ({ isTyping }) => (
    <div className={isTyping ? styles.NoTyping : styles.Typing}>
        <Typography color="secondary" type="caption">
            {isTyping.length > 0 ? 
                isTyping.length > 1 ? `${isTyping.join(", ")} are typing...` : `${isTyping.join()} is typing...` 
                : "nobody is typing"}
        </Typography>
    </div>
);

const mapStateToProps = state => ({
    isTyping: getIsTyping(state)
});

export default connect(mapStateToProps)(Typing);