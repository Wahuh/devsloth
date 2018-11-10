import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const modalRoot = document.getElementById("ModalRoot");
//const show = props.show;
//const hide = props.hide;
class Modal extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
        this.element.className = "HideModal";
        this.element.onclick = this.props.hide;
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
            this.element.className = "HideModal";
        }

        return ReactDOM.createPortal(
            this.props.children,
            this.element
        );
    }
}

export default Modal;

//onClick setShow modal to false