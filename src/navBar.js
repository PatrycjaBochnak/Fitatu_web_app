import React from "react";
import logo from "./images/logo.png";
import {
    BrowserRouter as Router, Route, Link
} from "react-router-dom";
import Contact from "./contact";

function NavBar () {
    return (
        <Router>
            <div className="navBar">
                <img src={logo} alt="logo"/>
                    <div className="buttons">
                        <Link to="/contact">Contact</Link>
                    </div>
            </div>
                <Route path="/" exact>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
        </Router>
    );
}

export default NavBar;

