import React from "react";
import "./Typography.scss";
//import colors from "../colors";

const Typography = (props) => {
    //const color = {
    //    color: colors[props.color]
    //};
    //style={color}

    const style = {
        textAlign: props.align,
        verticalAlign: props.verticalAlign,
        fontWeight: props.fontWeight,
    }

    let text = props.children;
    let textComponent = null;

    switch(props.type) {
        case "body":
            textComponent = <p style={style} className="Body">{text}</p>
            break;

        case "body2":
            textComponent = <p style={style} className="Body2">{text}</p>
            break;

        case "title":
            textComponent = <h1 style={style} className="Title">{text}</h1>
            break;

        case "subtitle":
            textComponent = <h2 style={style} className="Subtitle">{text}</h2>
            break;

        case "subtitle2":
            textComponent = <h2 style={style} className="Subtitle2">{text}</h2>
            break;

        default:
            textComponent = <p style={style} className="Body">{text}</p>
            break;
    }

    return (textComponent);
}

export default Typography;