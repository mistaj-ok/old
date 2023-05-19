import React from 'react';
import  ReactDOM  from "react-dom/client";

// app component is rendered
import App from './App';

// import css, allos us to use the varriables in ./App.css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
// ReactDOM.render(<App />, document.getElementById('root')); 