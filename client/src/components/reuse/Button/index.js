import React from "react";
import { any, bool, func, string } from "prop-types";
import Typography from "../Typography";
import styles from "./Button.scss";

const Button = ({ className, disabled, type, text, children, onClick }) => (
    <button 
    disabled={disabled}
    type={type} 
    onClick={onClick} 
    className={className ? `${styles.Button} ${className}` : styles.Button}>
        {text && <Typography type="button">{text}</Typography>}
        {children}
    </button>
);


Button.propTypes = {
    children: any,
    className: string,
    disabled: bool,
    onClick: func,
    text: string,
    type: string,
}

export default Button;