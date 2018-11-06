import React from "react";
import { string } from "prop-types";
import Typography from "../Typography";
import "./Label.scss";

const Label = (props) => {
    let className = "Label";
    if (props.className) {
        className += ` ${props.className}`;
    }

    return (
        <label className={className}>
            {props.children}
            {props.text}
        </label>
    );
}
    
Label.propTypes = {
    className: string,
}

export default Label;