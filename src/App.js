import React, { Fragment } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import International from "./components/international";
import National from "./components/national";
import Register from "./components/register";
import Contact from "./components/contact";

import Schedule from "./components/schedule";

function App() {
  return (
    // <Fragment>
    //   <Header />
    //   <Hero />
    //   <International />
    //   <National />
    //   <Register />
    //   <Contact />
    // </Fragment>
    <Router>
      <Header />

      <Switch>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Contact />
    </Router>
  );
}

function Home() {
  return (
    <Fragment>
      <Hero />
      <International />
      <National />
      <Register />
    </Fragment>
  );
}

export default App;
