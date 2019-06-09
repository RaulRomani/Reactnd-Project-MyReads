import React from "react";
import ReactDOM from "react-dom"; //import from a global dependency
import App from "./MyReads/App"; //import from a local file
import { BrowserRouter } from 'react-router-dom'


require('../css/Home.css');

// what to render and where to render it
ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('content')
);
//registerServiceWorker();


