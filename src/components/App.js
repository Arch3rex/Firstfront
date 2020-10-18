import React from "react";
import Start from "./Login/Start";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Projects from "./Projects/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={"app"}>
        <Switch>
          <Route path="/" exact component={Start} />

          <Route path="/register" component={Register} />

          <Route path="/login" component={Login} />

          <Route path="/projects/:uname" exact component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
