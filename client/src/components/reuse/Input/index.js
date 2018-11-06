import React from "react";
import "./Input.scss";
import { bool, func, string } from "prop-types";

const Input = ({autoFocus, className, max, min, onEnter, onChange, placeholder, type, value}) => {
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
        <input 
        className={className ? "Input " + className : "Input"} 
        type={type} 
        autoFocus={autoFocus} 
        placeholder={placeholder}
        value={value}
        max={max}
        min={min}
        onChange={onChange}
        onKeyPress={onEnterPress}
        />
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