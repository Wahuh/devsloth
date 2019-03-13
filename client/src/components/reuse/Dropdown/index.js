import React, { Component, createRef } from "react";
import styles from "./Dropdown.scss";

class Dropdown extends Component {
    node = createRef();

    componentWillMount() {
        document.addEventListener("mousedown", this.handleClose, false);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClose, false);
    }

    handleClose = event => {
        const { onClose } = this.props;
        if (!this.node.contains(event.target)) {
            onClose();
        }
    }
 
    render() {
        const { children } = this.props;
        return (
            <ul className={styles.Dropdown} ref={this.node}>
                {children}
            </ul>
        );
    }
}

export default Dropdown;