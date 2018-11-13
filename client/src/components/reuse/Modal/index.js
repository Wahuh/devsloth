import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.scss";

const modalRoot = document.getElementById("ModalRoot");
//const show = props.show;
//const hide = props.hide;
class Modal extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
        this.element.className = styles.HideModal;
        this.element.onclick = this.hide;
    }

    hide = (event) => {
        if (event.target.className === styles.ShowModal) {
            this.props.hide();
        }
    }

    componentDidMount() {
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }

    render() {
        if (this.props.show) {
            this.element.className = styles.ShowModal;
        } else {
            this.element.className = styles.HideModal;
        }

        return ReactDOM.createPortal(
            this.props.children,
            this.element
        );
    }
}

export default Modal;

//onClick setShow modal to false