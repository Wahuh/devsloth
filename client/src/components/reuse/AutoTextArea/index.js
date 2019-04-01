import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./AutoTextArea.scss";
import Button from "../Button";
import Icon from "../Icon";
import EditIcon from "../icons/EditIcon";

const TextArea = ({ autoFocus, onClick, className, name, readOnly, onChange, onBlur, placeholder, minRows, maxRows, type, value, onKeyUp, onKeyPress, onEnter  }) => {
    const textArea = useRef(null);
    const [ height, setHeight ] = useState(1);
    let once = false;
    useEffect(() => {
        // console.log(textArea.current.scrollHeight, "sh")
        // console.log(textArea.current.value);
        if (value && !once) {
            setHeight(textArea.current.scrollHeight);
            once = true;
        }
    }, [ value ])

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
                if (onEnter) {
                    onEnter();
                }
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
        //shrink when deleting text
        setHeight(textArea.current.scrollHeight);
    }


    return (
        <span className={styles.Editable}>
            <textarea
                style={{ height }}
                onClick={onClick}
                autoFocus={autoFocus}
                ref={textArea}
                id={name}
                name={name}
                rows={1}
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