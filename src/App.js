import React from 'react';
import './App.scss';
import Searcher from "./searcher";
import CarouselDay from "./carouselDay";
import HomePage from "./homePage";
import Contact from "./contact";
import NavBar from "./navBar";
import {
    Routes, Route, Outlet
} from "react-router-dom";

const Layout = () => {
    return <NavBar><Outlet /></NavBar>
}

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
                {/* tworze routowania, a w nich route (przekierowanie) */}
                {/* poniżej przekierowanie z "layoutem", w tym przypadku komponentowi: NavBar; oznacza to, że występuje w każdym poniższym roucie jako obejmujący go */}
                <Route element={ <Layout /> }>
                    {/* pierwszy route jest na strony 'domena.com' czyli teraz 'localhost:3000' */}
                    <Route path="/" element={<><HomePage /></>} />
                    {/* kolejny route jest na stronę 'domena.com/contact' czyli teraz 'localhost:3000/contact' */}
                    <Route path="/contact" element={<><Contact /></>} />

                    {/* to jest route na wszystkie inne podstrony całej domeny */}

                    {/* powyższy  */}
                </Route>
                <Route path="*" element={<div><h1>ERROR 404</h1><h2>Taka strona nie istnieje</h2></div>} />
            </Routes>
        );
    }
}

export default App;