import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import About from "./About";
import Shop from "./Shop";
import Navbar from "./nav";
import "./App.css";
import Item from "./moreInfo";
import { useState } from "react";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar className="navigation" />
        </div>
        <div className="pageData">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={Item} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
