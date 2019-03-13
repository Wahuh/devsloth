import React, { Component } from "react";
import classNames from "classnames";
import Button from "../Button";
import HideIcon from "../icons/HideIcon";
import ShowIcon from "../icons/ShowIcon";
import FloatLabel from "../FloatLabel";
import styles from "./FloatInput.scss";
import { bool, func, string } from "prop-types";
import Row from "../Row";
import EditIcon from "../icons/EditIcon";

class FloatInput extends Component {
    state = { 
        focused: false, 
        inputType: this.props.type,
        canEdit: false,
    }
    input = React.createRef();

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

    onEdit = () => {
        this.setState({ canEdit: true });
    }

    render() {
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
        } = this.props;

        const { focused, inputType } = this.state;

        let statusClassName;
        if (validation && validation.error) {
            statusClassName = styles.FloatInputError; 
        } else if (focused) {
            statusClassName = styles.FloatInputFocused;
        }

        return (
            <span className={classNames(
                styles.FloatInput, {
                    [styles.isError]: validation && validation.error,
                    [styles.isFocused]: focused
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
                        type={this.state.inputType} 
                        autoFocus={autoFocus} 
                        onFocus={() => { this.setState({ focused: true }); onFocus && onFocus(); }}
                        onBlur={(event) => { this.setState({ focused: false }); onBlur && onBlur(event); }}
                        placeholder={placeholder}
                        value={value}
                        id={name}
                        readOnly={readOnly || isEditable}
                        name={name}
                        onChange={onChange}
                        onKeyPress={this.onEnterPress}
                        />
                    {type === "password" && (
                        <Button type="button" theme="icon" onClick={() => {
                            if (inputType === "password") {
                                this.setState({ ...this.state, inputType: "text" });
                            } else if (inputType === "text") {
                                this.setState({ ...this.state, inputType: "password" });
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