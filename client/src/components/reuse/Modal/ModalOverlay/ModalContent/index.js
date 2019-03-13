import React, { Component } from "react";
import styles from "./ModalContent.scss";

class ModalContent extends Component {
    state = {
        leave: false
    }

    render() {
        const { children } = this.props;
        const { leave } = this.state;

        return (
            <div className={leave ? `${styles.ModalContent} ${styles.Leave}` : styles.ModalContent}>
                {children}
            </div>
        );
    }
}

export default ModalContent;