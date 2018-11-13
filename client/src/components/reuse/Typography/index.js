import React from "react";
import styles from "./Typography.scss";
//import colors from "../colors";

const Typography = (props) => {
    const style = {
        margin: props.margin,
        textAlign: props.align,
        verticalAlign: props.verticalAlign,
        fontWeight: props.fontWeight,
        marginBottom: props.marginBottom,
        lineHeight: props.lineHeight,
        textOverflow: "",
        overflow: "",
        whiteSpace: "",
        width: "",
    }

    if (props.overflow) {
        style.textOverflow = "ellipsis";
        style.overflow = "hidden";
        style.whiteSpace = "nowrap";
        style.width = "10vw";
    }
    let text = props.children;
    let textComponent = null;

    switch(props.type) {
        case "title":
            textComponent = <h1 style={style} className={styles.Title}>{text}</h1>
            break;

        case "h2":
            textComponent = <h2 style={style} className={className}>{text}</h2>
            break;

        case "heading":
            textComponent = <h3 style={style} className={styles.Heading}>{text}</h3>
            break;

        case "h4":
            textComponent = <h4 style={style} className={className}>{text}</h4>
            break;

        case "body":
            textComponent = <p style={style} className={styles.Body}>{text}</p>
            break;

        case "subtitle":
            textComponent = <h4 style={style} className={styles.Subtitle}>{text}</h4>
            break;
        
        case "button":
            textComponent = <p style={style} className={styles.ButtonText}>{text}</p>
            break;
        
        case "caption":
            textComponent = <p style={style} className={styles.Caption}>{text}</p>
            break;

        default:
            textComponent = <p style={style} className={styles.Body}>{text}</p>
            break;
    }

    return (textComponent);
}

export default Typography;