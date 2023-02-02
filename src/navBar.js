import React from "react";


function NavBar () {
    return (
        <div className="NavBar">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Calories calculator</a>
                    </div>
                    <div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/aboutProject">About project</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <h3>Welcome to Fitatu Web App</h3>
                <p>Tralala</p>
            </div>
        </div>
    );
}

export default NavBar;

