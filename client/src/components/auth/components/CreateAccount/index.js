import React from "react";
import Button from "../../../reuse/Button";
import Input from "../../../reuse/Input";
import Typography from "../../../reuse/Typography";
import Checkbox from "../../../general/Checkbox";
import "./CreateAccount.scss";

const CreateAccount = (props) => {
    return (
        <form className="CreateAccount">
            <Typography type="body2">Email</Typography>
            <Input autoFocus className="CreateAccountInput" type="email" placeholder="Email Address" />
            <Typography type="body2">Password</Typography>
            <Input className="CreateAccountInput" type="password" placeholder="Set Password" />
            <Checkbox label="Remember me" />
            <Button type="button" onClick={props.onCreateAccount} className="CreateAccountButton">Create Account</Button>
        </form>
    );
}

export default CreateAccount;