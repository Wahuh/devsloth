import React, { Component } from "react";
import styles from "./SideMenu.scss";

class SideMenu extends Component {
    state = {
        show: false
    }

    constructor(props) {
        super(props);

        //this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    hide = () => {
        document.getElementById("SideMenu").style.transform = "translate3d(-50vw, 0, 0)";
        document.getElementById("SideMenuOverlay").style.display = "none";
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