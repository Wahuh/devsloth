import React from "react";
import classNames from "classnames";
import styles from "./Row.scss";

const justifys = {
    "space-between": styles.justifyContentSpaceBetween,
    "center": styles.justifyContentCenter,
    "flex-end": styles.justifyContentFlexEnd
}

const paddings = {
    "xs": styles.paddingXs,
    "sm": styles.paddingSm,
    "md": styles.paddingMd,
    "lg": styles.paddingLg,
    "xl": styles.paddingXl
}

const paddingsX = {
    "xs": styles.paddingXXs,
    "sm": styles.paddingXSm,
    "md": styles.paddingXMd,
    "lg": styles.paddingXLg,
    "xl": styles.paddingXXl
}

const paddingsY = {
    "xs": styles.paddingYXs,
    "sm": styles.paddingYSm,
    "md": styles.paddingYMd,
    "lg": styles.paddingYLg,
    "xl": styles.paddingYXl
}

const paddingsTop = {
    "xs": styles.paddingTopXs,
    "sm": styles.paddingTopSm,
    "md": styles.paddingTopMd,
    "lg": styles.paddingTopLg,
    "xl": styles.paddingTopXl,
    "xxl": styles.paddingTopXxl,
}

const paddingsBottom = {
    "xs": styles.paddingBottomXs,
    "sm": styles.paddingBottomSm,
    "md": styles.paddingBottomMd,
    "lg": styles.paddingBottomLg,
    "xl": styles.paddingBottomXl,
    "xxl": styles.paddingBottomXxl,
}

const Row = ({
    children, 
    justifyContent, 
    alignItems, 
    padding, 
    paddingX,
    paddingY,
    paddingTop, 
    paddingBottom,
    paddingLeft,
    paddingRight, 
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    maxWidth,
    maxHeight
}) => {
    const className = classNames(
        {
            [styles.row]: true,
            [styles.alignItemsCenter]: alignItems === "center",
            [styles.maxWidth]: maxWidth,
            [styles.maxHeight]: maxHeight
        },
        paddings[padding],
        paddingsX[paddingX],
        paddingsY[paddingY],
        paddingsTop[paddingTop],
        paddingsBottom[paddingBottom],
        justifys[justifyContent]
    );

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Row;