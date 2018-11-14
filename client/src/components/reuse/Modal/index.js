import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.scss";

const modalRoot = document.getElementById("ModalRoot");

class Modal extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
        this.element.className = styles.HideModal;
        this.element.onclick = this.hide;
    }

    hide = (event) => {
        if (event.target.className === styles.ShowModal) {
            this.props.onHide();
        }
    }

    componentDidMount() {
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }

    render() {
        const { show, children } = this.props;
        if (show) {
            this.element.className = styles.ShowModal;
        } else {
            this.element.className = styles.HideModal;
        }

        return ReactDOM.createPortal(
            children,
            this.element
        );
    }
}

export default Modal;

//onClick setShow modal to false