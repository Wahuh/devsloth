import React from "react";
import "./TextInput.scss";

const TextInput = (props) => {
        return (
            <input placeholder={props.placeholder} value={props.value} className="TextInput" onChange={props.onChange} onKeyPress={props.onKeyPress} />
        );
}

export default TextInput;