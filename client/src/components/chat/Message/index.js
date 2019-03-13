import React from "react";
import * as linkify from "linkifyjs";
import hashtag from "linkifyjs/plugins/hashtag";
import Linkify from "linkifyjs/react";

import Typography from "../../reuse/Typography";
import Row from "../../reuse/Row";
import styles from "./Message.scss";
import NotificationMessage from "./NotificationMessage";

const Message = ({ message }) => {
    const { alias, text, icon, timestamp, isNotification } = message;
    return isNotification ? (
        <NotificationMessage>
            {text}
        </NotificationMessage>
    ) : 
    (<div className={styles.Message}>
        <div className={styles.MessageIcon}>
        </div>

        <div className={styles.MessageBody}>
            <Row alignItems="flex-end">
                <div className={styles.MessageAlias}>
                    <Typography color="secondary" bold>{alias}</Typography>
                </div>

                <div className={styles.MessageTimestamp}>
                    <Typography color="tertiary" type="caption">{timestamp}</Typography>
                </div>
            </Row>

            <div className={styles.MessageText}>
                <Linkify>
                    <Typography color="primary" type="body">
                        {text}
                    </Typography>
                </Linkify>
            </div>
        </div>
    </div>)
}

export default Message;
