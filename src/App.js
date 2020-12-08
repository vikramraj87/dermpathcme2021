import logo from "./logo.svg";
import React, { Fragment } from "react";
import "./App.scss";

import Header from "./components/header";
import Hero from "./components/hero";
import International from "./components/international";
import National from "./components/national";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <International />
      <National />
    </Fragment>
  );
}

export default App;
