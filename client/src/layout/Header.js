import React from "react";
import "./Header.scss";

const Header = (props) => {
    return (
        <header className="Header">
            {props.children}
        </header>
    );
}

export default Header;