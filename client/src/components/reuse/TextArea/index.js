import React from "react";
import styles from "./TextArea.scss";

const TextArea = ({ autoFocus, className, name, onChange, onEnter, onKeyPress, placeholder, rows, type, value }) => {
    function onEnterPress(event) {
        if (event.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
        }
        let handled = false;
        if (event.key !== undefined) {
            if (event.key === "Enter") {
                console.log(onEnter);
                onEnter();
                handled = true;
            } else {
                onKeyPress();
            }
        } else if (event.keyCode !== undefined) {
            if (event.keyCode == 13) {
                onEnter();
                handled = true;
            } else {
                onKeyPress();
            }
        }

        if (handled) {
            event.preventDefault();
        }
    }

    return (
        <textarea 
            autoFocus={autoFocus}
            id={name}
            name={name}
            placeholder={placeholder}
            rows={rows}
            onChange={onChange}
            value={value}
            type={type} 
            onKeyPress={onEnterPress}
            className={className ? `${styles.TextArea} ` + className : styles.TextArea} 
        >
        </textarea>
    );
} 

export default TextArea;