import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.scss";

const modalRoot = document.getElementById("ModalRoot");

class Modal extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
        this.element.className = styles.Modal;
        this.element.onclick = this.hide;
    }

    hide = (event) => {
        if (event.target.className === styles.Modal) {
            this.props.onHide();
        }
    }

    componentDidMount() {
        modalRoot.appendChild(this.element);
        // let elements = document.getElementById("index").querySelectorAll("*");
        // for (let i = 0; i < elements.length; i++) {
        //     elements[i].tabIndex = "-1"
        // }
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }

    render() {
        const { children } = this.props;
        return ReactDOM.createPortal(
            children,
            this.element
        );
    }
}

export default Modal;

//onClick setShow modal to false