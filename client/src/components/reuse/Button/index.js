import React from "react";
import styles from "./Button.scss";
import Typography from "../Typography";
import { any, func, string } from "prop-types";

const Button = ({ className, disabled, type, text, children, onClick, alignSelf, justifySelf}) => {
    let style = {
        alignSelf: alignSelf,
        justifySelf: justifySelf
    }

    return (
        <button 
        disabled={disabled}
        style={style}
        type={type} 
        onClick={onClick} 
        className={className ? `${styles.Button} ` + className : styles.Button}>
            {text && <Typography type="button">{text}</Typography>}
            {children}
        </button>
    );
}

Button.propTypes = {
    children: any,
    className: string,
    type: string,
    onClick: func.isRequired,
}

export default Button;