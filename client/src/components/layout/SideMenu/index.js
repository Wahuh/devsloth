import React, { Component } from "react";
import styles from "./SideMenu.scss";

class SideMenu extends Component {
    state = {
        show: false
    }

    hide = () => {
        document.getElementById(styles.SideMenu).style.transform = "translate3d(-80vw, 0, 0)";
        document.getElementById(styles.SideMenuOverlay).style.visibility = "hidden";
        document.getElementById(styles.SideMenuContainer).style.visibility = "hidden";
    }

    toggleMenu = () => {
        this.setState({
            show: !this.state.visible
        });
    }

    render() {
        return (
            <div id={styles.SideMenuContainer}>
                <div id={styles.SideMenu}>
                    {this.props.children}
                </div>
                <div id={styles.SideMenuOverlay} onClick={this.hide}></div>
            </div>
        );
    }
}

export default SideMenu;