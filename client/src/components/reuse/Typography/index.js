import React from "react";
import Body from "./types/Body";
import Caption from "./types/Caption";
import Description from "./types/Description";
import Inline from "./types/Inline";
import Heading from "./types/Heading";
import Subheading from "./types/Subheading";
import Tooltip from "./types/Tooltip";
import styles from "./Typography.scss";
import Title from "./types/Title";
//import colors from "../colors";
const components = {
    "body": Body,
    "caption": Caption,
    "description": Description,
    "heading": Heading,
    "subheading": Subheading,
    "tooltip": Tooltip,
    "inline": Inline,
    "title": Title
}

const aligns = {
    "center": styles.center
}

const margins = {
    "sm": styles.sm,
    "md": styles.md,
    "lg": styles.lg,
    "none": styles.none
}

const weights = {
    "bold": styles.bold
}


const Typography = ({ color, children, bold, type, text, margin, align, spacing }) => {
    const colors = {
        primary: styles.Primary,
        secondary: styles.Secondary,
        tertiary: styles.Tertiary,
        quaternary: styles.Quaternary,
        error: styles.error
    };

    let TextComponent = type ? components[type] : components["body"];
    if (!TextComponent) {
        TextComponent = components["body"];
    }
    return (
        <TextComponent className={
            `${colors[color]} ${margin ? margins[margin] : margins["none"]} ${bold && weights["bold"]} ${align && aligns[align]} ${spacing && styles.spacing}`}>
            {text}
            {children}
        </TextComponent>
    );
}

export default Typography;