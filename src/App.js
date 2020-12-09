import logo from "./logo.svg";
import React, { Fragment } from "react";
import "./App.scss";

import Header from "./components/header";
import Hero from "./components/hero";
import International from "./components/international";
import National from "./components/national";
import Register from "./components/register";
import Contact from "./components/contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <International />
      <National />
      <Register />
      <Contact />
    </Fragment>
  );
}

export default App;
