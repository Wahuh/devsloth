import React, { Fragment } from "react";
import ValidationMessage from "../ValidationMessage";
import FloatLabel from "../FloatLabel";
import Label from "../Label";
import styles from "./Select.scss";
import { bool, func, string } from "prop-types";

const Select = ({
    autoFocus, 
    className,
    children,
    contentEditable, 
    floatLabel, 
    label, 
    max, 
    min, 
    name, 
    onEnter, 
    onChange, 
    placeholder, 
    required, 
    type, 
    value, 
    validation, 
    successMessage, 
    onKeyPress,
    onBlur,
}) => {
    function onEnterPress(event) {
        if (event.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
        }
        let handled = false;
        if (event.key !== undefined) {
            if (event.key === "Enter") {
                onEnter();
                handled = true;
            } else {
                onKeyPress && onKeyPress();
            }
        } else if (event.keyCode !== undefined) {
            if (event.keyCode == 13) {
                onEnter();
                handled = true;
            } else {
                onKeyPress && onKeyPress();
            }
        }

        if (handled) {
            event.preventDefault();
        }
    }

    return (
            // {label && <Label required={required} htmlFor={name}>{label}</Label>}
            // {floatLabel && <FloatLabel>{floatLabel}</FloatLabel>}
        <select 
        className={className ? `${styles.Select} ` + className : styles.Select} 
        type={type} 
        contentEditable={contentEditable}
        autoFocus={autoFocus} 
        // ref={focus && (Select => Select && Select.focus())}
        placeholder={placeholder}
        value={value}
        max={max}
        min={min}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onKeyPress={onEnterPress}
        >
            {children}   
        </select>
    );
}

Select.propTypes = {
    autoFocus: bool,
    className: string,
    onEnter: func,
    onChange: func,
    placeholder: string,
    type: string,
}

export default Select;