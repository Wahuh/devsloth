import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

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
        console.log(document.getElementById("SideMenuList"));
        
        return ReactDOM.createPortal(
            <GroupList/>,
            document.getElementById("App")
        );
    }
}

export default GroupContainer;