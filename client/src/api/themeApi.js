import themeStyles from "../styles/themes.scss";

const themes = {
    light: themeStyles.light,
    dark: themeStyles.dark
}

const DARK = "dark";
const LIGHT = "light";

const renderTheme = theme => {
    const root = document.documentElement;
    root.className = themes[theme];
}

const changeTheme = () => {
    let theme = localStorage.getItem("theme");
    let newTheme;
    if (theme === DARK) {
        localStorage.setItem("theme", LIGHT);
        newTheme = LIGHT;
    } else {
        localStorage.setItem("theme", DARK);
        newTheme = DARK;
    }
    renderTheme(newTheme)
}

const initializeTheme = () => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
        localStorage.setItem("theme", DARK);
        theme = DARK;
    }
    renderTheme(theme);
}

export default {
    changeTheme,
    initializeTheme
}