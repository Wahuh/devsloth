import React from "react";
import ReactDOM from "react-dom";


const portal = document.createElement("div");
portal.id = "portal";
document.body.appendChild(portal);

const Portal = ({ children }) => (
    ReactDOM.createPortal(
        children,
        portal
    )
);

export default Portal;