import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.scss";
import ModalOverlay from "./ModalOverlay";
import classNames from "classnames";

const modalRoot = document.getElementById("ModalRoot");

const sizes = {
    "sm": styles.small,
    "md": styles.medium,
    "lg": styles.large
}

const aligns = {
    "flex-start": styles.flexStart,
    "center": styles.center
}

class Modal extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
        this.element.onclick = this.hide;
    }

    hide = (event) => {
        const { onHide } = this.props;
        if (event.target === this.element.children[0]) {
            onHide();
        }
    }

    componentDidMount() {
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element)
    }

    render() {
        const { children, size, align, className, isCustom } = this.props;
        return ReactDOM.createPortal(
            <ModalOverlay>
                {isCustom ? children :
                    <div className={classNames({ [styles.ModalContent]: !isCustom }, sizes[size], className, aligns[align])}>
                        {children}
                    </div>
                }

            </ModalOverlay>,
            this.element
        )
    }
}

export default Modal;