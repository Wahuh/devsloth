import React, { useRef, useState } from "react";
import classNames from "classnames";
import Button from "../Button";
import HideIcon from "../icons/HideIcon";
import ShowIcon from "../icons/ShowIcon";
import FloatLabel from "../FloatLabel";
import styles from "./FloatInput.scss";
import { bool, func, string } from "prop-types";
import Row from "../Row";
import EditIcon from "../icons/EditIcon";

const FloatInput = props => {
    const {
        autoFocus,
        className,
        label,
        name,
        onBlur,
        onFocus,
        onChange,
        placeholder,
        type,
        readOnly,
        value,
        validation,
        innerRef,
        isEditable
    } = props;

    const [ isFocused, setIsFocused ] = useState(false);
    const [ inputType, setInputType ] = useState("");
    const ref = useRef(null);

    const handleEnterPress = event => {
        if (event.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
        }
        let handled = false;
        if (event.key !== undefined) {
            if (event.key === "Enter") {
                onEnter();
                handled = true;
            }
        } else if (event.keyCode !== undefined) {
            if (event.keyCode == 13) {
                onEnter();
                handled = true;
            }
        }
        if (handled) {
            event.preventDefault();
        }
    }

    return (
        <span className={classNames(
            styles.FloatInput, {
                [styles.isError]: validation && validation.error,
                [styles.isFocused]: isFocused
            }
        )}>
            <div className={styles.LabelContainer}>
                <FloatLabel className={styles.Label}>{label}</FloatLabel>
                {validation && <FloatLabel className={validation.error ? styles.ErrorMessage : styles.SuccessMessage}>{validation.message}</FloatLabel>} 
            </div>

            <Row>
                <input 
                    ref={innerRef}
                    className={classNames(styles.Input, className)} 
                    type={inputType} 
                    autoFocus={autoFocus} 
                    onFocus={() => { setIsFocused(true); onFocus && onFocus(); }}
                    onBlur={(event) => { setIsFocused(false); onBlur && onBlur(event); }}
                    placeholder={placeholder}
                    value={value}
                    id={name}
                    readOnly={readOnly || isEditable}
                    name={name}
                    onChange={onChange}
                    onKeyPress={handleEnterPress}
                    />
                {type === "password" && (
                    <Button type="button" theme="icon" onClick={() => {
                        if (inputType === "password") {
                            setInputType("text");
                        } else if (inputType === "text") {
                            setInputType("password")
                        }
                    }}>
                        {inputType === "password" && <HideIcon />}
                        {inputType === "text" && <ShowIcon />}
                    </Button>
                )}
                {isEditable && <EditIcon />}
            </Row>
        </span>
    );
}

FloatInput.propTypes = {
    autoFocus: bool,
    className: string,
    onEnter: func,
    onChange: func,
    placeholder: string,
    type: string,
}

export default React.forwardRef((props, ref) => <FloatInput innerRef={ref} {...props} />);