import React from "react";
import classNames from "classnames";
import styles from "./Icon.scss";

const marginsRight = {
    "xs": styles.marginRightXs,
    "sm": styles.marginRightSm
}

const sizes = {
    "xs": styles.xs,
    "sm": styles.small,
    "md": styles.medium,
    "lg": styles.large
}

const Icon = ({ size, children, marginRight }) => (
    <div className={classNames(styles.Icon, sizes[size], marginsRight[marginRight])}>
        {children}
    </div>
);

export default Icon;