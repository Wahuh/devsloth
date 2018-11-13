import React from "react";
import Typography from "../../reuse/Typography";
import Row from "../../reuse/Row";
import styles from "./Message.scss";

const Message = ({ alias, children, icon, time }) => (
    <Row>
        <div className={styles.MessageIcon}>
            <img src={"./placeholder-face-big.png"} />
        </div>

        <div className={styles.MessageBody}>
            <Row className={styles.MessageBodyRow}>
                <Typography marginBottom="0" type="subtitle">{alias}</Typography>
                <Typography lineHeight="30px" marginBottom="0" type="caption">{time}</Typography>
            </Row>

            <Typography type="body">
                {children}
            </Typography>
        </div>
    </Row>
);

export default Message;
