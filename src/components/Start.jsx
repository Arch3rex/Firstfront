import React from "react";
import {Link} from "react-router-dom";
function Start () {
	return(<div className="container cont">
		<h1>Register or login</h1>
		<div className="row justify-content-center text-center">
		<div className="col-2"></div>
		<div className="col-8">
		<form>
		<Link to='/register'>
		<input className = "btn btn-dark m-1 btnwidth" type="submit" value ="Register"/>
		</Link>
		<Link to ='/login'>
		<input className = "btn btn-dark m-1 btnwidth" type ="submit" value ="Login"/>
		</Link>
		</form>
		</div>
		<div className="col-2 "></div>
		</div>
	</div>)
	
}
export default Start;