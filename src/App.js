import React from 'react';
import './App.scss';
import Searcher from "./searcher";
import CarouselDay from "./carouselDay";
import NavBar from "./navBar";

class App extends React.Component {
    state = {
        product: ''
    };

    setCurrentProduct = (product) => {
      this.setState({product: product});
    };

    render() {
        return (
            <div className="App">
                <NavBar/>
                <div className="appContainer">
                    <Searcher setCurrentProduct={this.setCurrentProduct}/>
                    <CarouselDay product={this.state.product} />
                </div>
            </div>
        );
    }
}

export default App;