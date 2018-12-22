import React, { Component } from "react";
import Typography from "../Typography";

class FetchingMessage extends Component {
    state = {
        ellipses: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.ellipses < 3) {
                this.setState({
                    ellipses: this.state.ellipses + 1
                })
            } else {
                this.setState({
                    ellipses: 0
                })
            }
        }, 500)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { message } = this.props;
        const { ellipses } = this.state;
        return (
            <Typography align="center">{`${message}` + ".".repeat(ellipses) }</Typography>
        );
    }
}

export default FetchingMessage;