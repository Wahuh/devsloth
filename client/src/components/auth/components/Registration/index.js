import React from "react";
import Button from "../../../reuse/Button";
import Input from "../../../reuse/Input";
import Typography from "../../../reuse/Typography";
import Checkbox from "../../../general/Checkbox";
import "./Registration.scss";

const Registration = (props) => {
    return (
        <form className="Registration">
            <Typography type="body2">Email</Typography>
            <Input autoFocus className="RegistrationInput" type="email" placeholder="Email Address" />
            <Typography type="body2">Password</Typography>
            <Input className="RegistrationInput" type="password" placeholder="Set Password" />
            <Checkbox label="Remember me" />
            <Button type="button" onClick={props.onRegistration} className="RegistrationButton">Create Account</Button>
            <Typography align="center" type="body2">It's quick and free.</Typography>
        </form>
    );
}

export default Registration;