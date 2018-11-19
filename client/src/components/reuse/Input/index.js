import React, { Fragment } from "react";
import ValidationMessage from "../ValidationMessage";
import Label from "../Label";
import styles from "./Input.scss";
import { bool, func, string } from "prop-types";

const Input = ({autoFocus, className, label, max, min, name, onEnter, onChange, placeholder, required, type, value, validation, successMessage}) => {
    function onEnterPress(event) {
        if (event.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
        }
        let handled = false;
        if (event.key !== undefined) {
            if (event === "Enter") {
                onEnter();
                handled = true;
            }
        } else if (event.keyCode !== undefined) {
            if (event.keyCode == 13) {
                onEnter();
                handled = true;
            }
        }

        if (handled) {
            event.preventDefault();
        }
    }

    return (
        <Fragment>
            {label && <Label required={required} htmlFor={name}>{label}</Label>}
            <input 
            className={className ? `${styles.Input} ` + className : styles.Input} 
            type={type} 
            autoFocus={autoFocus} 
            placeholder={placeholder}
            value={value}
            max={max}
            min={min}
            id={name}
            name={name}
            onChange={onChange}
            onKeyPress={onEnterPress}
            data-success-message={successMessage}
            />

            {
                validation &&
                <ValidationMessage 
                    validation={validation}
                />
            }

        </Fragment>
    );
}

Input.propTypes = {
    autoFocus: bool,
    className: string,
    onEnter: func,
    onChange: func,
    placeholder: string,
    type: string,
}

export default Input;