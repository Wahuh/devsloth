import React from "react";
import { any, bool, func, string } from "prop-types";
import Typography from "../Typography";
import styles from "./Button.scss";

const Button = ({ className, disabled, id, theme, type, text, children, onClick }) => {
    let buttonClassName = `${styles.Button}`;

    const themeClassNames = {
        action: styles.Action,
        outlined: styles.Outlined,
    }

    if (theme) {
        buttonClassName += ` ${themeClassNames[theme]}`;
    } else if (className) {
        buttonClassName += ` ${className}`;
    }

    return (
        <button 
        id={id}
        disabled={disabled}
        type={type} 
        onClick={onClick} 
        className={buttonClassName}>
            {text && <Typography type="button">{text}</Typography>}
            {children}
        </button>
    )
};


Button.propTypes = {
    children: any,
    className: string,
    disabled: bool,
    onClick: func,
    text: string,
    type: string,
}

export default Button;