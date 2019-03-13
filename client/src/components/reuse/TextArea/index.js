import React, { Component } from "react";
import classNames from "classnames";
import styles from "./TextArea.scss";
import { isThisISOWeek } from "date-fns";
import Button from "../Button";
import Icon from "../Icon";
import EditIcon from "../icons/EditIcon";

class TextArea extends Component {
    maxRows = this.props.maxRows
    textArea = React.createRef();
    prevScrollHeight = 0;
    rowHeight;
    initialHeight = 0;
    prevHeight = 0;

    handleEnterPress = event => {
        const { onKeyPress, onEnter } = this.props;

        if (event.defaultPrevented) {
            return; // Should do nothing if the default action has been cancelled
        }
        let handled = false;
        if (event.key !== undefined) {
            if (event.key === "Enter") {
                onEnter && onEnter();
                handled = true;
            } else {
                onKeyPress && onKeyPress();
            }
        } else if (event.keyCode !== undefined) {
            if (event.keyCode == 13) {
                onEnter && onEnter();
                handled = true;
            } else {
                onKeyPress && onKeyPress();
            }
        }

        if (handled) {
            event.preventDefault();
        }
    }

    componentDidMount() {
        this.initialHeight = this.textArea.current.scrollHeight;
    }

    autoExpand = () => {
        const scrollHeight = this.textArea.current.scrollHeight; 

        //calculate row height only once
        if (this.prevScrollHeight && scrollHeight > this.prevScrollHeight && !this.rowHeight) {
            this.rowHeight = scrollHeight - this.prevScrollHeight;
        }

        //calculate the number of rows needed for content
        const rows = ((scrollHeight - this.initialHeight) / this.rowHeight) + 1;

        //if it exceeds the row limit use the previous height
        if (rows > this.maxRows) {
            this.textArea.current.style.height = this.prevHeight;
        } else {
            //calculate a new textArea height
            this.textArea.current.style.height = 'inherit';
            const computed = window.getComputedStyle(this.textArea.current);
            const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                         + this.textArea.current.scrollHeight
                         + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
            this.textArea.current.style.height = height + 'px';
            this.prevHeight = height;
        }
        this.prevScrollHeight = scrollHeight;
    }

    render() {
        const { autoFocus, onClick, className, name, readOnly, onChange, onBlur, placeholder, minRows, type, value, onKeyUp } = this.props;
        return (
            <span className={styles.Editable}>
                <textarea 
                    onClick={onClick}
                    autoFocus={autoFocus}
                    ref={this.textArea}
                    id={name}
                    name={name}
                    rows={minRows}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    onInput={this.autoExpand}
                    value={value}
                    type={type} 
                    readOnly={readOnly}
                    onKeyPress={this.handleEnterPress}
                    onKeyUp={onKeyUp}
                    className={
                        classNames(
                            styles.TextArea,
                            className,
                            { [styles.ReadOnly]: readOnly }
                        )
                    }
                >
                </textarea>
                {readOnly && 
                    <Button onClick={onClick} className={styles.EditButton} theme="icon">
                        <Icon size="md">
                            <EditIcon />
                        </Icon>
                    </Button>
                }
            </span>

        );
    }
}

export default TextArea;