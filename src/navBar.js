import React from "react";
import logo from "./images/logo.png";
import {
    BrowserRouter as Router, Route, Link
} from "react-router-dom";

function NavBar () {
    return (
        <Router>
            <div className="navBar">
                <img src={logo} alt="logo"/>
                    <div className="buttons">
                        <Link to="/">Home</Link>
                        <Link to="/">BMI calculator</Link>
                        <Link to="/">About</Link>
                    </div>
            </div>
                <Route path="/contact" exact>
                    <Contact/>
                </Route>
        </Router>
    );
}

export default NavBar;

