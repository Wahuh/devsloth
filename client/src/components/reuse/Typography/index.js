import React from "react";
import styles from "./Typography.scss";
//import colors from "../colors";

const Typography = ({ color, children, overflow, type }) => {
    const colors = {
        primary: styles.Primary,
        secondary: styles.Secondary,
        tertiary: styles.Tertiary,
        error: styles.error
    };

    const style = {
        textOverflow: "",
        overflow: "",
        whiteSpace: "",
        width: "",
    }

    if (overflow) {
        style.textOverflow = "ellipsis";
        style.overflow = "hidden";
        style.whiteSpace = "nowrap";
        style.width = "10vw";
    }
    let text = children;
    let textComponent = null;

    switch(type) {
        case "title":
            textComponent = <h1 className={color ? `${styles.Title} ${colors[color]}` : styles.Title}>{text}</h1>
            break;

        case "h2":
            textComponent = <h2 style={style} className={className}>{text}</h2>
            break;

        case "heading":
            textComponent = <h3 className={color ? `${styles.Heading} ${colors[color]}` : styles.Heading}>{text}</h3>
            break;

        case "h4":
            textComponent = <h4 style={style} className={className}>{text}</h4>
            break;

        case "body":
            textComponent = <p className={color ? `${styles.Body} ${colors[color]}` : styles.Body}>{text}</p>
            break;
        
        case "bullet":
            textComponent = <p style={style} className={styles.Bullet}>{text}</p>
            break;

        case "subtitle":
            textComponent = <h4 style={style} className={styles.Subtitle}>{text}</h4>
            break;
        
        case "button":
            textComponent = <p className={color ? `${styles.ButtonText} ${colors[color]}` : styles.ButtonText}>{text}</p>
            break;
        
        case "caption":
            textComponent = <p className={color ? `${styles.Caption} ${colors[color]}` : styles.Caption}>{text}</p>
            break;

        default:
            textComponent = <p style={style} className={styles.Body}>{text}</p>
            break;
    }

    return (textComponent);
}

export default Typography;