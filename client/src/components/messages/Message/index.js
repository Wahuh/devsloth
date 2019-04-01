import React from "react";
import Linkify from "linkifyjs/react";
import styles from "./Message.scss";
import NotificationMessage from "./NotificationMessage";

const Message = ({ message }) => {
    const { alias, text, icon, timestamp, isNotification } = message;
    // return isNotification ? (
    //     <NotificationMessage text={text} />
    // ) : 
    // (
    return (
        <li className={styles.Message}>
            <div className={styles.MessageIcon}></div>

            <div className={styles.MessageBody}>
                <span>
                    <p>
                        {alias}
                    </p>

                    <small>
                        {timestamp}
                    </small>
                </span>

                <div className={isNotification && styles.NotificationText}>
                    <Linkify>
                        <p>
                            {text}
                        </p>
                    </Linkify>
                </div>
            </div>
        </li>
        );
}

export default Message;

//24 x24 padd, 16 x 16 marg y, 568 x 72, 464x108