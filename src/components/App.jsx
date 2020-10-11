import React from "react";
import Start from "./Start";
import Login from "./Login";
import Register from "./Register";
import Projects from "./Projects";
import  {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App(){
	return(
	<Router>	
	<div>
	<Switch>
		<Route path="/" exact component={Start}/>
		<Route path="/register" component={Register}/>
		<Route path="/login" component={Login}/>
		<Route path ="/projects/:uname" exact component={Projects}/>
	</Switch>	
		</div>
	</Router>);

		
}
export default App;