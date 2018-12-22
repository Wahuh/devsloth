import React from "react";
import Typography from "../../reuse/Typography";
import Row from "../../reuse/Row";
import styles from "./Message.scss";

const Message = ({ alias, text, icon, timestamp }) => (
    <div className={styles.Message}>
        <div className={styles.MessageIcon}>
        </div>

        <div className={styles.MessageBody}>
            <Row alignItems="flex-end" className={styles.MessageBodyRow}>
                <Typography marginBottom="0" type="subtitle">{alias}</Typography>
                <Typography color="tertiary" type="caption">{timestamp}</Typography>
            </Row>

            <div className={styles.MessageText}>
                <Typography color="tertiary" type="body">
                    {text}
                </Typography>
            </div>
        </div>
    </div>
);

export default Message;
