import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <React.StrictMode>
    {/* dodaje tutej BrowserRouter (przeniesiony z navBar.js) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);