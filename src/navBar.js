import React from "react";
import logo from "./images/logo.png";

function NavBar () {
    return (
            <div className="navBar">
                <img src={logo} alt="logo"/>
                    <div className="buttons">
                        <a href="/">Calculator</a>
                        <a href="/aboutProject">About project</a>
                        <a href="/">Contact</a>
                    </div>
            </div>
    );
}

export default NavBar;

