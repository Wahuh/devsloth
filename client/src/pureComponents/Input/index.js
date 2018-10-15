import React from "react";

const Input = (props) => {
    function onKeyPress(event) {
        let onEnter = props.onEnter;

        if (event.key === 'Enter') {
            console.log('enter pressed');
            onEnter(event.target.value);
        }
    }

    return (
        <input placeholder={props.placeholder} value={props.value} className={props.style} onChange={props.onChange} onKeyPress={onKeyPress} autoFocus="autofocus" />
    );
}

export default Input;