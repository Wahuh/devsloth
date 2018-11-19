import React, { Component } from "react";
import Segment from "../Segment";
import styles from "./SegmentedControl.scss";

class SegmentedControl extends Component {
    constructor(props) {
        super(props);

        this.state = this.populateInitialState(this.props.segments);
    }

    populateInitialState = (segments) => {
        let initialState = {};

        segments.forEach(function({ id, active }) {
            if (active) {
                initialState[id] = true;
            } else {
                initialState[id] = false;
            }
        })

        return initialState;
    }

    onActive = (onClickFn) => {
        const that = this;

        const onClick = (event) => {
            let segments = { ...that.state };
            Object.keys(segments).forEach(function(key) {
                segments[key] = false
            });

            that.setState({
                ...segments,
                [event.currentTarget.id]: true
            });
            onClickFn();
        }
        return onClick;
    }

    render() {
        const { className, segments } = this.props;

        const segmentItems = segments.map(
            ({ id, text, onClick }) => {
                return (
                    <Segment
                        active={this.state[id]}
                        id={id}
                        text={text} 
                        onClick={this.onActive(onClick)} 
                    />
                );
            } 
        );

        return (
            <div className={className ? `${styles.SegmentedControl} ${className}` : styles.SegmentedControl}>
                {segmentItems}
            </div>
        );
    }
}

export default SegmentedControl;