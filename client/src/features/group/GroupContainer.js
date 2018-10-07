import React, { Component, Fragment } from "react";

import GroupList from "./components/GroupList";
import GroupTitle from "./components/GroupTitle";

class GroupContainer extends Component {
    groups() {
        let groups = [
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
            {name: "Wahuh"},
        ];
    }

    render() {
        return (
            <Fragment>
                <GroupList />
                <GroupTitle />
            </Fragment>
        );
    }
}

export default GroupContainer;