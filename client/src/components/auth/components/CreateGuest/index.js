import React from "react";
import Button from "../../../reuse/Button";
import Typography from "../../../general/Typography";
import "./CreateGuest.scss";

const CreateGuest = (props) => {
    return (
        <div className="CreateGuest">
            <Button className="CreateGuestButton" onClick={props.onCreateGuest}>Continue as guest</Button>
            <Typography align="center" type="body2">Your data won't be saved permanently.</Typography>
        </div>
    );
}

export default CreateGuest;