import React from "react";

import Home from "./Page/Home";
import "./App.css";
import Sinopsis from "./Page/Sinopsis";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './Components/Redux/store';


function App() {
  return (
    <Provider store ={store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/Sinopsis/:id" component={Sinopsis} />
    </Router>
    </Provider>
  );
}

export default App;
