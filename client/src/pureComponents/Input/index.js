import React from "react";

const Input = (props) => {
    return (
        <input placeholder={props.placeholder} value={props.value} className={props.style} onChange={props.onChange} onKeyPress={props.onKeyPress} />
    );
}

export default Input;