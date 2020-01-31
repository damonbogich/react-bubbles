import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import {axiosWithAuth} from './utils/axiosWithAuth';

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/protected" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;










// maybe need to wrap app in router in index.js


// ..Self Study: 
// *  Explain what a token is used for.
// *  What steps can you take in your web apps to keep your data secure?
// *  Describe how web servers work.
// *  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

// 1. Tokens are used to authenticate the user.  They tell the server that the user is authorized and allows them to see data.
// 2. Once we have a token, we can add two layers of protection to our app. 
//     1. One being protected routes
//     2.  The other being sending an authentication header with our API calls
// 3. It’s a software program that tells physical servers what to do.  Its main purpose is to “serve” web pages it retrieves from your project code to users upon request.
// 4. CREATE, READ, UPDATE, DELETE