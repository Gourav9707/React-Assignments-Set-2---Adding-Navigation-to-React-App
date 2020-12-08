import React, { useState } from "react";
import { Link, Redirect, Route, Switch, useLocation } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import LocationDisplay from "./LocationDisplay";
import NoMatch from "./NoMatch";
import "../styles/App.css";

function App() {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route path="/no-match" component={NoMatch} />
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Home} />
        <Redirect to="/no-match" />
      </Switch>

      <LocationDisplay />
    </div>
  );
}

export default App;
export { LocationDisplay };
