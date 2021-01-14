import React, { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Route } from "wouter";
import SingleGif from "./components/SingleGif";
import "./App.css";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-7 offset-5 col-sm-12 col-md-7 offset-md-5 mx-auto">
          <SearchInput />
        </div>
      </div>

      <section className="container py-3">
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
