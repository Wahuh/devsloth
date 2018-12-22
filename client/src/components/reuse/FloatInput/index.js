import React, { Component, Fragment } from "react";
import Button from "../Button";
import HideIcon from "../icons/HideIcon";
import ShowIcon from "../icons/ShowIcon";
import FloatLabel from "../FloatLabel";
import styles from "./FloatInput.scss";
import { bool, func, string } from "prop-types";

class FloatInput extends Component {
    state = { focused: false, inputType: this.props.type }

    onEnterPress = (event) => {
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

    render() {
        const {
            autoFocus,
            className,
            error,
            label,
            message,
            name,
            onEnter,
            onFocus,
            onChange,
            placeholder,
            type,
            top,
            bottom,
            required,
            readOnly,
            value
        } = this.props;
        const { focused, inputType } = this.state;

        let statusClassName;
        if (error) {
            statusClassName = styles.FloatInputError; 
        } else if (focused) {
            statusClassName = styles.FloatInputFocused;
        }

        return (
            <div className={`${styles.FloatInput} ${statusClassName}`}>
                {top && <div className={styles.LabelContainer}>
                    <FloatLabel className={styles.Label}>{label}</FloatLabel>
                    {message && <FloatLabel className={error ? styles.ErrorMessage : styles.SuccessMessage}>{message}</FloatLabel>} 
                </div>}

                <div className={styles.InputContainer}>
                    <input 
                    className={className ? `${styles.Input} ` + className : styles.Input} 
                    type={this.state.inputType} 
                    autoFocus={autoFocus} 
                    onFocus={() => this.setState({ focused: true })}
                    onBlur={() => this.setState({ focused: false })}
                    placeholder={placeholder}
                    value={value}
                    id={name}
                    readOnly={readOnly}
                    name={name}
                    onFocus={onFocus}
                    onChange={onChange}
                    onKeyPress={this.onEnterPress}
                    />
                    {type === "password" && (
                        <Button type="button" className={styles.PasswordButton} onClick={() => {
                            if (this.state.inputType === "password") {
                                this.setState({ ...this.state, inputType: "text" });
                            } else if (this.state.inputType === "text") {
                                this.setState({ ...this.state, inputType: "password" });
                            }
                        }}>
                            {this.state.inputType === "password" && <HideIcon />}
                            {this.state.inputType === "text" && <ShowIcon />}
                        </Button>
                    )}
                </div>
                {bottom && <div className={styles.LabelContainer}>
                    <FloatLabel className={styles.Label}>{label}</FloatLabel>
                    {message && <FloatLabel className={error ? styles.ErrorMessage : styles.SuccessMessage}>{message}</FloatLabel>} 
                </div>}
            </div>
        );
    }
}

FloatInput.propTypes = {
    autoFocus: bool,
    className: string,
    onEnter: func,
    onChange: func,
    placeholder: string,
    type: string,
}

export default FloatInput;