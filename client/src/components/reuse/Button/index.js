import React from "react";
import { any, bool, func, string } from "prop-types";
import classNames from "classnames";
import Typography from "../Typography";
import styles from "./Button.scss";

const sizes = {
    "sm": styles.small,
    "md": styles.medium,
    "lg": styles.large
};


const themes = {
    secondaryAction: styles.SecondaryAction,
    delete: styles.Delete,
    action: styles.Action,
    outlined: styles.Outlined,
    icon: styles.Icon,
    link: styles.Link
}

const Button = ({ className, size, disabled, id, theme, type, text, children, onClick, isLoading }) => {
    const buttonClassName = classNames(
        sizes[size],
        themes[theme],
        styles.Button,
        className
    );

    return (
        <button 
            id={id}
            disabled={disabled}
            type={type} 
            onClick={onClick} 
            className={buttonClassName}>
            {text && <Typography type="body">{text}</Typography>}
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