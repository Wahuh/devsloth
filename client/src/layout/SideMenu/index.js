import React, { Component } from "react";
import "./SideMenu.scss";

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        //this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    hide() {
        document.getElementById("SideMenu").style.transform = "translate3d(-50vw, 0, 0)";
        document.getElementById("SideMenuCover").style.display = "none";
    }


    toggleMenu() {
        this.setState({
            show: !this.state.visible
        });
    }

    render() {
        return (
            <div id="SideMenuContainer">
                <div id="SideMenu">
                    {this.props.children}
                </div>
                <div id="SideMenuCover" onClick={this.hide}></div>
            </div>
        );
    }
}

export default SideMenu;