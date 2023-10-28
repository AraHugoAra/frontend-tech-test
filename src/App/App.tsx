/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import ListContainer from "../components/ListContainer";
import { SearchBarContextProvider } from "../context/searchBarContext";

function App() {
  return (
    <>
      <Router>
        <SearchBarContextProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <ListContainer />
            </Route>
          </Switch>
        </SearchBarContextProvider>
      </Router>
    </>
  );
}

export default App;
