import React from "react";
import { any, bool, func, string } from "prop-types";
import Typography from "../Typography";
import styles from "./Button.scss";

const Button = ({ className, disabled, id, theme, type, text, children, onClick, rounded }) => {
    let buttonClassName = `${styles.Button}`;

    const themeClassNames = {
        secondaryAction: styles.SecondaryAction,
        delete: styles.Delete,
        action: styles.Action,
        outlined: styles.Outlined,
        icon: styles.Icon
    }

    if (theme) {
        buttonClassName += ` ${themeClassNames[theme]}`;
    } 
    
    if (className) {
        buttonClassName += ` ${className}`;
    }

    return (
        <button 
            id={id}
            disabled={disabled}
            type={type} 
            onClick={onClick} 
            className={rounded ? buttonClassName += ` ${styles.Rounded}` : buttonClassName}>
            {text && <Typography type="button">{text}</Typography>}
            {children}
        </button>
    );
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