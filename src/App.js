import React from 'react';
import './App.scss';
import Searcher from "./searcher";
import CarouselDay from "./carouselDay";
import HomePage from "./homePage";
import Contact from "./contact";
import NavBar from "./navBar";
import {
    Routes, Route
} from "react-router-dom";

class App extends React.Component {
    // state = {
    //     product: ''
    // };

    // setCurrentProduct = (product) => {
    //   this.setState({product: product});
    // };

    render() {
        return (
            <Routes>
                <Route path="/" element={<NavBar><HomePage /></NavBar>} />
                <Route path="/contact" element={<NavBar><Contact /></NavBar>} />
            </Routes>
        );
    }
}

export default App;