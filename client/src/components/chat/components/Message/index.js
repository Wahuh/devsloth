import React from "react";
import ListItem from "../../../reuse/ListItem";
import Typography from "../../../reuse/Typography";
import Row from "../../../reuse/Row";
import "./Message.scss";

const Message = ({ alias, children, icon, time }) => {
    return (
        <ListItem className="Message">
            <Row>
                <div className="MessageIcon">
                    <img src={icon} />
                </div>

                <div className="MessageBody">
                    <Row>
                        <div className="MessageAlias">
                            <Typography type="subtitle" fontWeight="bold">{alias}</Typography>
                        </div>
                        
                        <div className="MessageTime">
                            <Typography type="body2">{time}</Typography>
                        </div>
                    </Row>

                    <div className="MessageText">
                        <Typography type="body">
                            {children}
                        </Typography>
                    </div>
                </div>
            </Row>

        </ListItem>
    );
}

export default Message;
