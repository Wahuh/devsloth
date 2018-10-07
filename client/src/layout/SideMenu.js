import React, { Component } from "react";
import "./SideMenu.scss";

class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
        
        //this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    hideOnExternalClick() {

    }


    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div id="SideMenu">
                {this.props.children}
            </div>
        );
    }
}

export default SideMenu;