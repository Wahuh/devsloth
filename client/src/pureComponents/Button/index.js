import React from "react";
import "./Button.scss"

const Button = (props) => {
    let defaultStyle = "Button";

    if (props.style) {
        defaultStyle += ' ' + props.style
    }
    console.log(props.style);
    console.log(defaultStyle);

    return (
        <button onClick={props.onClick} className={defaultStyle}>
            {props.children}
        </button>
    );
}

export default Button;