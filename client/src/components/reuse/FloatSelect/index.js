import React, { useState, useRef } from "react";
import classNames from "classnames";
import styles from "./FloatSelect.scss";
import FloatLabel from "../FloatLabel";

const FloatSelect = props => {
    const [ isFocused, setIsFocused ] = useState(false);
    const ref = useRef(null);
    const {
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
        height,
        size,
        value, 
        validation, 
        successMessage, 
        onKeyPress,
        onBlur,
    } = props;

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const handleEnterPress = () => {

    }

    const handleOpenSelect = () => {
        console.log("clicked");
        ref.current.click();
    }

    return (
        <div className={classNames(
            styles.FloatSelect,
            className,
            { [styles.IsFocused]: isFocused }
        )}
            onClick={handleOpenSelect}
        >
            <FloatLabel className={styles.Label}>
                {label}
            </FloatLabel>

            <select
                style={{ height }}
                className={classNames(
                    styles.Select
                )}
                onClick={() => console.log("sel click")}
                type={type} 
                contentEditable={contentEditable}
                autoFocus={autoFocus} 
                // ref={focus && (Select => Select && Select.focus())}
                placeholder={placeholder}
                value={value}
                max={max}
                ref={ref}
                min={min}
                id={name}
                name={name}
                onBlur={handleBlur}
                onChange={onChange}
                onFocus={handleFocus}
                size={size}
                onKeyPress={handleEnterPress}
            >
                {children}
            </select>
        </div>
    );
}

export default FloatSelect;