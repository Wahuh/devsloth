import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import styles from "./TextArea.scss";
import Button from "../Button";
import Icon from "../Icon";
import EditIcon from "../icons/EditIcon";

const TextArea = ({ autoFocus, onClick, className, name, readOnly, onChange, onBlur, placeholder, minRows, maxRows, type, value, onKeyUp, onKeyPress, onEnter  }) => {
    let maxRowLimit = maxRows;
    const textArea = useRef(null);
    let prevScrollHeight = 0;
    let rowHeight;
    let initialHeight = 0;
    let prevHeight = 0;

    useEffect(() => {
        initialHeight = textArea.current.scrollHeight;
    }, [])

    const handleEnterPress = event => {
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
    const autoExpand = () => {
        const scrollHeight = textArea.current.scrollHeight; 

        //calculate row height only once
        if (prevScrollHeight && scrollHeight > prevScrollHeight && !rowHeight) {
            rowHeight = scrollHeight - prevScrollHeight;
        }

        //calculate the number of rows needed for content
        const rows = ((scrollHeight - initialHeight) / rowHeight) + 1;

        //if it exceeds the row limit use the previous height
        if (rows > maxRowLimit) {
            textArea.current.style.height = prevHeight;
        } else {
            //calculate a new textArea height
            textArea.current.style.height = 'inherit';
            const computed = window.getComputedStyle(textArea.current);
            const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                         + textArea.current.scrollHeight
                         + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
            textArea.current.style.height = height + 'px';
            prevHeight = height;
        }
        prevScrollHeight = scrollHeight;
    }


    return (
        <span className={styles.Editable}>
            <textarea 
                onClick={onClick}
                autoFocus={autoFocus}
                ref={textArea}
                id={name}
                name={name}
                rows={minRows}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onInput={autoExpand}
                value={value}
                type={type} 
                readOnly={readOnly}
                onKeyPress={handleEnterPress}
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

export default TextArea;