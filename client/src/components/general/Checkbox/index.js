import React from "react";
import { bool, func, string } from "prop-types";
import Label from "../Label";
import "./Checkbox.scss";

const Checkbox = (props) => {
    let className = "Checkbox";
    if (props.className) {
        className += ` ${props.className}`;
    }

    return (
        <Label text={props.label}>
            <input 
            className={className} 
            type="checkbox" 
            value={props.value}
            checked={props.checked ? true : false}
            onChange={props.onChange}
            />
        </Label>
    );
}
    
Checkbox.propTypes = {
    className: string,
    label: string,
    value: string,
    checked: bool.isRequired,
    onChange: func.isRequired,
}

export default Checkbox;