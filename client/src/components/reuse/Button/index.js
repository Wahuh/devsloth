import React from "react";
import "./Button.scss";
import { any, func, string } from "prop-types";

const Button = ({ className, type, children, onClick}) => {
    let defaultStyle = "Button";

    return (
        <button 
        type={type} 
        onClick={onClick} 
        className={className ? defaultStyle += ` ${className}`: defaultStyle} >
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