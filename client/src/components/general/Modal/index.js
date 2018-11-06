import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import { bool, func } from "prop-types";

const modalRoot = document.getElementById("ModalRoot");

class Modal extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
        this.element.className = "Modal";
        this.element.onclick = this.props.onHide;
    }

    componentDidMount() {
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }

    render() {
        if (this.props.show) {
            this.element.className = "ShowModal";
        } else {
            this.element.className = "Modal";
        }

        return ReactDOM.createPortal(
            this.props.children,
            this.element
        );
    }
}

Modal.propTypes = {
    show: bool.isRequired,
    onHide: func,
}

export default Modal;

//onClick setShow modal to false