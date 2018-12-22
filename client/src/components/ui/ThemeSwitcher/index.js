import React, { Component } from "react";
import Button from "../../reuse/Button";
import MoonIcon from "../../reuse/icons/MoonIcon";
import styles from "../../../styles/themes.scss";

const themes = {
    light: styles.light,
    dark: styles.dark
}

class ThemeSwitcher extends Component {
    onSwitch = (theme) => {
        console.log(themes[theme])
        const root = document.documentElement;
        root.className = themes[theme];
    }

    render() {
        return (
            <div>
                <Button text="Theme: Dark" theme="action" onClick={() => this.onSwitch("light")} />
            </div>
        );
    }
}

export default ThemeSwitcher;