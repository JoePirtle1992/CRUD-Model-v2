import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnlyOne from "../src/components/OnlyOne";
import ErrorPage from "../src/components/ErrorPage";
import UpdatePage from "../src/components/UpdatePage";
import AddPage from "../src/components/AddPage";
import MainPage from "../src/components/MainPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/v1/radiohead/:id" component={OnlyOne} exact></Route>
        <Route path="/v1/update/:id" component={UpdatePage} exact>
        </Route>
        <Route path="/v1/add" exact>
          <AddPage />
        </Route>
        <Route path="/">
          <ErrorPage />
        </Route>
        <Route path="/deepurple/error" exact>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
