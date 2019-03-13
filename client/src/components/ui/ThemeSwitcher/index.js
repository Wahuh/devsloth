import React, { Component } from "react";
import Button from "../../reuse/Button";
import PaletteIcon from "../../reuse/icons/PaletteIcon";
import styles from "./ThemeSwitcher.scss";
import themeStyles from "../../../styles/themes.scss";
import Tooltip from "../../reuse/Tooltip";

const themes = {
    light: themeStyles.light,
    dark: themeStyles.dark
}

class ThemeSwitcher extends Component {
    state = {
        theme: "dark"
    };

    toggle = (theme) => {
        const root = document.documentElement;
        root.className = themes[theme];
        this.setState({ theme });
    }

    render() {
        const { theme } = this.state;

        return (
            <div data-tip data-for="ThemeSwitcher" className={styles.ThemeSwitcher}>
                <Button 
                    theme="icon" 
                    onClick={() => theme === "dark" ? this.toggle("light") : this.toggle("dark") }>
                    <PaletteIcon />
                </Button>
                <Tooltip place="left" id="ThemeSwitcher" message="Change Theme" />
            </div>
        );
    }
}

export default ThemeSwitcher;