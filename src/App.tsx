import React from "react";
import { Switch, Route } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

import GradeBook from "./components/Gradebook";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Jumbotron>
        <h1>FILEX Final Grades</h1>
      </Jumbotron>
      <Switch>
        <Route path="/grades/:codigo">
          <GradeBook />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
