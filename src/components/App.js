import React from 'react';
import Start from './Login/Start';
import Login from './Login/Login';
import Register from './Login/Register';
import Projects from './Projects/Projects';
import WrongRoute from './WrongRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={'app'}>
        <Switch>
          <Route path="/" exact component={Start} />

          <Route path="/register" exact component={Register} />

          <Route path="/login" exact component={Login} />

          <Route path="/projects/:uname" exact component={Projects} />

          <Route path="/:else" component={WrongRoute} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
